interface menuItem {
  count: number
  name: string
  items: clientItems
}

type menuMap = Record<string, menuItem>
