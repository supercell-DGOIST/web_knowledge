import { debounce } from '@/utils/common'
import { loadAllImg } from '@/directives/lazyLoad'

export default {
  install() {
    window.addEventListener('scroll', debounce(loadAllImg))
  }
}
