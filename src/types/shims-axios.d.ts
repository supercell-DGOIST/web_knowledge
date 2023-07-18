import { type AxiosRequestConfig } from 'axios'
/**
 * 自定义扩展axios模块
 * @author Maybe
 */

type getAndDeleteFn = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
) => Promise<R>

type putAndPostFn = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) => Promise<R>

declare module 'axios' {
  export interface ApiInstance {
    get?: getAndDeleteFn
    delete?: getAndDeleteFn
    post?: putAndPostFn
    put?: putAndPostFn
  }
}
