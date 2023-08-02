import clients from './clients'

import { directorys, contents } from './browser'

const directoryMap: directoryMap = {
  Browser: directorys
}

const contentMap: contentMap = {
  Browser: contents
}

export { clients, directoryMap, contentMap }
