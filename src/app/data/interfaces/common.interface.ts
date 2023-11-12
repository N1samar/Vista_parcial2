export type KeyValue = { [key: string]: string };

export interface IHttpOptions<T = any> {
  path: string;
  body?: T;
  param?: number | string;
}
