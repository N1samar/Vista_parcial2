export interface IResponse<T = any> {
  data: T | T[];
  status: number;
  message: string;
}
