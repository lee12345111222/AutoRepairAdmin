/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module 'element-resize-detector';
type OrNull<T> = { [K in keyof T]: T[K] | null }
type OrUndefined<T> = { [K in keyof T]: T[K] | undefined }
