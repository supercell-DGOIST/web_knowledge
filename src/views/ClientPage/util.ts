import clients from '@/metas/clients.json'

export const getClientMenus = (): menuItem[] => {
  const map: menuMap = {}

  const options = clients.reduce((map, v) => {
    const type = v.type
    if (map[type] === undefined) {
      map[type] = {
        count: 1,
        name: type,
        items: [v]
      }
    } else {
      const item = map[type]
      item.count += 1
      item.items.push(v)
    }
    return map
  }, map)

  return Object.values(options)
}
