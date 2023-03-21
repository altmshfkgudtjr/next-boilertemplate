export {};

declare global {
  interface Window {
    /** Google Tag Manager 객체 */
    dataLayer: Record<string, any>[];
  }

  type Select<T, K extends keyof T> = T[K];

  type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };
}
