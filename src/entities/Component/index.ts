import Handlebars from 'handlebars'
import { Children, Props, PropsWithChildren } from '@/entities/Component/types'
import { EventBus, generateUUID } from '@/entities/Component/lib'

class Component {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  }

  private _element: null | HTMLElement = null
  private readonly _meta: null | { tagName: string; props: Props } = null
  private eventBus = new EventBus()
  private readonly _id: string = generateUUID()
  props: null | Props = null
  children: null | Children = null

  constructor(tagName = 'div', propsWithChildren: PropsWithChildren = {}) {
    const { children, props } = this._getChildren(propsWithChildren)
    this.children = children
    this._meta = {
      props,
      tagName,
    }

    this.props = this._makePropsProxy({
      ...props,
      ...(this.props?.settings?.withInternalID ? { _id: this._id } : {}),
    })
    this._registerEvents()
    this.eventBus.emit(Component.EVENTS.INIT)
  }

  private _getChildren(propsWithChildren: PropsWithChildren) {
    const children: Children = {}
    const props: Props = {}
    Object.entries(propsWithChildren).forEach(([key, value]) => {
      if (value instanceof Component) {
        children[key] = value
      } else {
        props[key] = value
      }
    })

    return { children, props }
  }

  private _addEvents() {
    if (this.props?.events) {
      const { events = {} } = this.props
      Object.keys(events).forEach((event) => {
        if (this._element instanceof HTMLElement) {
          this._element.addEventListener(event, events[event])
        }
      })
    }
  }

  private _removeEvents() {
    if (this.props?.events) {
      const { events = {} } = this.props
      Object.keys(events).forEach((event) => {
        if (this._element instanceof HTMLElement) {
          this._element.removeEventListener(event, events[event])
        }
      })
    }
  }

  private _makePropsProxy(props: Props): Props {
    return new Proxy<Props>(props, {
      get: (target, prop: string): unknown => {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set: (target, prop: string, value: unknown): boolean => {
        const prevValue = target[prop]

        target[prop] = value
        this.eventBus.emit(
          Component.EVENTS.FLOW_CDU,
          { ...target, [prop]: value },
          {
            ...target,
            [prop]: prevValue,
          }
        )
        return true
      },
      deleteProperty: (): never => {
        throw new Error('Access is denied')
      },
    })
  }

  private _registerEvents() {
    this.eventBus.on(Component.EVENTS.INIT, this._init.bind(this))
    this.eventBus.on(
      Component.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this)
    )
    this.eventBus.on(
      Component.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    )
    this.eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _init() {
    this._createResources()

    this.eventBus.emit(Component.EVENTS.FLOW_RENDER)
  }

  private _createResources() {
    this._element = this._createDocumentElement(this._meta?.tagName as string)
  }

  private _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName)
    if (this.props?.settings?.withInternalID) {
      element.setAttribute('data-id', this._id as string)
    }
    return element
  }

  private _componentDidMount() {
    this.componentDidMount()
  }

  private _componentDidUpdate(oldProps?: Props, newProps?: Props) {
    const response = this.componentDidUpdate(
      oldProps as Props,
      newProps as Props
    )
    if (!response) {
      return
    }
    this._render()
  }

  private _render() {
    if (this._element instanceof HTMLElement) {
      const block = this.render() as unknown as Node
      this._removeEvents()
      this._element.innerHTML = ''
      this._element.appendChild(block)
      this._addEvents()
    }
  }

  componentDidMount(_oldProps: Props = {}) {}

  dispatchComponentDidMount() {
    this.eventBus.emit(Component.EVENTS.FLOW_CDM)
  }

  componentDidUpdate(_oldProps: Props, _newProps: Props) {
    return true
  }

  render() {}

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props as Props, nextProps)
  }

  getContent() {
    return this._element
  }

  compile(template: string, props: Props) {
    const propsAndStubs = { ...props }
    Object.entries(this.children as Children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`
    })
    const fragment = this._createDocumentElement(
      'template'
    ) as HTMLTemplateElement
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs)

    Object.values(this.children as Children).forEach((child) => {
      console.log(fragment)
      const stub = fragment.content.querySelector(
        `[data-id="${child._id}"]`
      ) as HTMLElement
      stub.replaceWith(child.getContent() as Node)
    })
    return fragment.content
  }
}

export default Component
