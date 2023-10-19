import { forEach } from './tools'
import { clients } from '@/metas'

export const getClientTypes = (list: clientItems): clientTypes => {
  const clientTypes: clientTypes = {}

  forEach(list, (client: clientItem) => {
    const { type } = client
    if (clientTypes[type] === undefined) {
      clientTypes[type] = {
        type,
        count: 1
      }
    } else {
      clientTypes[type].count = clientTypes[type]?.count + 1
    }
  })

  return clientTypes
}

export const findClient = (clientName: string | string[]): clientItem => {
  return clients.find((item: clientItem) => item.key === clientName)
}

export function throttle(fn: method, delay = 1000): method {
  let timer: NodeJS.Timeout | null = null

  return function (...rest: any[]) {
    if (timer !== null) return
    timer = setTimeout(() => {
      fn(rest)
      timer = null
    }, delay)
  }
}

export function debounce(fn: method, delay = 1000): method {
  let timer: NodeJS.Timeout | null = null

  return function (...args: any[]): void {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(args)
    }, delay)
  }
}
