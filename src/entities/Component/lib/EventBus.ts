export class EventBus {
  private readonly listeners: {
    [key: string]: CallableFunction[]
  }

  constructor() {
    this.listeners = {}
  }

  on = (event: string, callback: CallableFunction) => {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(callback)
  }

  off = (event: string, callback: CallableFunction) => {
    if (!this.listeners[event]) {
      throw new Error(`Событие ${event} отсуствует`)
    }
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    )
  }

  emit = (event: string, ...args: unknown[]) => {
    if (!this.listeners[event]) {
      throw new Error(`Событие ${event} отсуствует`)
    }

    this.listeners[event].forEach((listener) => {
      listener(...args)
    })
  }
}
