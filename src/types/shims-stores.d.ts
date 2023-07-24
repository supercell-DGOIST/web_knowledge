interface controllerItem {
  controller: AbortController
  signal: AbortSignal
}

interface abortHttpStates {
  controllers: controllerItem[]
}
