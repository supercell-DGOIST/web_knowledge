import { forEach } from '@/utils/tools'

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

export const getClientList = (list: clientItems): clientItems[] => {
  const clientList: clientItems[] = []

  forEach(list, (client: clientItem, i: number) => {
    const _i: number = Math.floor(i / 3)

    if (clientList.at(_i) === undefined) {
      clientList.push([client])
    } else {
      clientList.at(_i)?.push(client)
    }
  })
  return clientList
}
