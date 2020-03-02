import { Event, ObjLike } from './types'

export default class EventBus {
  private events: Event[] = []
  private uid = 0
  /**
   * 注册/订阅事件
   * @param name 事件名
   * @param handler 执行函数
   */
  register(name: string, handler: Function): number {
    const eventId = this.uid + 1
    const events = this.events
    const event = this.findEvent(name)

    if (event !== null) {
      event.handlers.push({ id: eventId, handler })
      return eventId
    }

    events.push({
      name,
      handlers: [
        {
          id: eventId,
          handler
        }
      ]
    })
    return eventId
  }
  /**
   * 退订事件
   * @param name 事件名称
   * @param eventId 事件id
   */
  unregister(name: string, eventId: number): EventBus {
    const events = this.events

    for (const i in events) {
      if (name === events[i].name) {
        if (eventId && events[i].handlers.length > 0) {
          const eventIndex = events[i].handlers.findIndex(item => item.id === eventId)
          if (eventIndex !== -1) {
            events[i].handlers.splice(eventIndex, 1)
          }
        } else {
          events.splice(+i, 1)
        }
      }
      return this
    }
    return this
  }
  /**
   * 发射事件
   * @param name 事件名称
   * @param payload 荷载
   */
  emit(name: string, payload: ObjLike): EventBus {
    const events = this.events

    for (const i in events) {
      if (name === events[i].name) {
        const funcs = events[i].handlers
        funcs.forEach((item) => {
          item.handler(payload)
        })
        return this
      }
    }
    return this
  }

  create(): EventBusInstance {
    return new EventBus()
  }

  private findEvent(name: string): Event | null {
    const events = this.events
    for (const i in events) {
      if (name === events[i].name) {
        return events[i]
      }
    }
    return null
  }
}

interface EventBusInstance extends EventBus {
  create(): EventBus;
}
