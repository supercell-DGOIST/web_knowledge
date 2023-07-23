interface clientType {
  type: string
  count: number
}

type clientTypes = Record<string, clientType>
