import { fileURLToPath } from 'node:url'
import { networkInterfaces, type NetworkInterfaceInfo } from 'node:os'
import { loadEnv } from 'vite'

export const toPath = (filePath: string): string =>
  fileURLToPath(new URL('../' + filePath, import.meta.url))

export const getEnvConfig = (mode: string): Record<string, string> => loadEnv(mode, toPath('env'))

const forMap = (list: any[], callback: Function): any => {
  let index = 0
  const leng = list.length
  while (index < leng) {
    const item = list.at(index)
    const result = callback(item, index, list)
    if (result !== null && result !== undefined) {
      return result
    }
    index++
  }
}

// 常见的虚拟网卡MAC地址和厂商
const vmNetwork: string[] = [
  '00:05:69', //vmware1
  '00:0C:29', //vmware2
  '00:50:56', //vmware3
  '00:1C:42', //parallels1
  '00:03:FF', //microsoft virtual pc
  '00:0F:4B', //virtual iron 4
  '00:16:3E', //red hat xen , oracle vm , xen source, novell xen
  '08:00:27', //virtualbox
  '00:00:00' // VPN
]

const isVmNetwork = (mac: string): boolean => {
  const isvm = forMap(vmNetwork, (vm: string) => {
    if (mac.startsWith(vm)) {
      return true
    }
  })
  return isvm ?? false
}

const netDict: NodeJS.Dict<NetworkInterfaceInfo[]> = networkInterfaces()

export const getLocalHost = (): string => {
  const dicts = Object.values(netDict).flat()
  const host = forMap(dicts, (dict: NetworkInterfaceInfo) => {
    const { address, family, internal, mac } = dict
    const isvm = isVmNetwork(mac)
    if (family === 'IPv4' && address !== '127.0.0.1' && !internal && !isvm) {
      return address
    }
  })
  return host ?? '127.0.0.1'
}
