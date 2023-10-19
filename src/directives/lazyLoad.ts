let imgs: imgOption[] = []

const deleteImg = (el: any): void => {
  imgs = imgs.filter((v) => v.el !== el)
}

const loadImg = (option: imgOption): void => {
  const { el, top, src, parentEle } = option
  const { scrollTop, clientHeight } = document.documentElement
  const viewHeight = scrollTop + clientHeight
  // 不在可视区
  if (top >= viewHeight) return
  option.lazy = true

  // 在可视区
  const image = new Image()
  image.onload = () => {
    el.src = src
    el.removeAttribute('class')
    el.removeAttribute('data-src')
    parentEle?.classList.remove('image-box-animation')
  }
  image.src = src
  // 加载过的图片，需要将其从imgs中清除
  deleteImg(el)
}

export const loadAllImg = function (): void {
  for (const option of imgs) {
    if (!option.lazy) {
      loadImg(option)
    }
  }
}

export const lazyLoad: lazyLoad = {
  mounted(el: any) {
    const parentEle: HTMLElement = el.parentNode
    const option: imgOption = {
      el,
      src: el.dataset.src,
      top: el.getBoundingClientRect().top ?? 0,
      parentEle,
      lazy: false
    }
    imgs.push(option)
  },
  beforeUnmount(el) {
    deleteImg(el)
  }
}
