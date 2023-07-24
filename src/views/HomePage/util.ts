import { forEach } from '@/utils/tools'

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
