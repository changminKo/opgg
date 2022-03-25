import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, defer, from } from 'rxjs';
import { map } from 'rxjs/operators';

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: 'https://randomuser.me/api/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const initializeAxios = (config: AxiosRequestConfig): AxiosInstance => axios.create(config);

export const axiosInstance = initializeAxios(axiosRequestConfiguration);

// eslint-disable-next-line max-len
export const get = <T>(url: string): Observable<T> => defer(() => from(axiosInstance.get<T>(url))).pipe(
  map((result: AxiosResponse<T>) => {
    console.log('get', result);
    return result.data;
  }),
);
