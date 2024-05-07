import { AxiosInterceptorOptions } from 'axios';
declare module 'axios' {
  export interface AxiosInterceptorManager {
    handlers: AxiosInterceptorOptions[];
  }
}
