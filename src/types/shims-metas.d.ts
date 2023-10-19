interface clientItem {
  name: string
  type: string
  key: string
  icon?: string
  link?: string
}

type clientItems = clientItem[]

interface directory {
  name?: string
  contentKey?: string
  children?: directory[]
}

type directoryMap = Record<string, directory[]>

interface contentItemContents {
  text?: string
  contents: contentItem[]
}

interface contentItem {
  label?: string
  contents?: contentItemContents[]
}

interface contents {
  title?: string
  description?: string
  key?: string
  contents?: contentItem[]
}

type contentMap = Record<string, contents[]>

type method = (...args: any[]) => void
