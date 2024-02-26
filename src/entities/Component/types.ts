import Component from './index'

export type Props = {
  [key: string]: unknown
  events?: {
    [key: string]: EventListener
  }
  settings?: {
    withInternalID: boolean
  }
}

export type Children = { [key: string]: Component }

export type PropsWithChildren = Props & { children?: Children }
