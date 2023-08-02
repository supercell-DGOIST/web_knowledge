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

export const getImageUrl = (path: string): string => {
  return new URL(`src/${path}`, import.meta.env.VITE_BASE_URL).href
}
