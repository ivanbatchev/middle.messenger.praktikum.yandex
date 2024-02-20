export class EventBus {
  private readonly listeners: {
    [key: string]: Function[]
  }

  constructor() {
    this.listeners = {}
  }

  on = (event: string, callback: Function) => {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(callback)
  }

  off = (event: string, callback: Function) => {
    if (!this.listeners[event]) {
      throw new Error(`Событие ${event} отсуствует`)
    }
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    )
  }

  emit = (event: string, ...args: any[]) => {
    if (!this.listeners[event]) {
      throw new Error(`Событие ${event} отсуствует`)
    }

    this.listeners[event].forEach((listener) => {
      listener(...args)
    })
  }
}
