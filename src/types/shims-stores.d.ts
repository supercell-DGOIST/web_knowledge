interface controllerItem {
  controller: AbortController
  signal: AbortSignal
}

interface states {
  controllers: controllerItem[]
}

