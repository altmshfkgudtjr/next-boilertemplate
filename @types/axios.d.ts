import 'axios';

declare module 'axios' {
  export interface DefaultResponse<T = any> {
    txId: string;
    data: T;
    pagination?: {
      count: number;
      limit: number;
      page: number;
    };
    error?: {
      code: string;
      message: string;
    };
  }

  export interface AxiosInstance {
    request<T>(config: AxiosRequestConfig): Promise<T>;
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
}
