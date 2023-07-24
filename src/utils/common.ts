import { forEach } from './tools'

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
