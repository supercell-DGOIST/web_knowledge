interface imgOption {
  el: any
  src: string
  top: number
  parentEle: HTMLElement
  lazy: boolean
}

type loadImg = (option: imgOption) => void

type mounted = (el?: any) => void

type beforeUnmount = (el?: any) => void

interface lazyLoad {
  mounted: mounted
  beforeUnmount: beforeUnmount
}
