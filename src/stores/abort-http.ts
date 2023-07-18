import { defineStore } from 'pinia'

const store = defineStore('abortControllers', {
  state: (): states => ({
    controllers: []
  }),
  getters: {
    getControllers(): controllerItem[] {
      return this.controllers
    }
  },
  actions: {
    updateControllers(controller: controllerItem) {
      this.controllers.push(controller)
    },
    clearControllers() {
      while (this.controllers.length > 0) {
        const item: controllerItem | undefined = this.controllers.shift()
        if (item !== undefined) {
          const { signal, controller } = item
          !signal.aborted && controller.abort()
        }
      }
    }
  }
})

export default store
