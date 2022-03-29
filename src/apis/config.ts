import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, defer, from } from 'rxjs';
import { map } from 'rxjs/operators';

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: 'https://codingtest.op.gg/api/summoner/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const initializeAxios = (config: AxiosRequestConfig): AxiosInstance => axios.create(config);

export const axiosInstance = initializeAxios(axiosRequestConfiguration);

export const get = <T>(url: string): Observable<T> => defer(() => from(axiosInstance.get<T>(url))).pipe(
  map((result: AxiosResponse<T>) => result.data),
);

export const itemAxiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/10.15.1/data/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const itemInitializeAxios = (config: AxiosRequestConfig): AxiosInstance => axios.create(config);

export const itemAxiosInstance = initializeAxios(itemAxiosRequestConfiguration);

export const itemGet = <T>(url: string): Observable<T> => defer(() => from(itemAxiosInstance.get<T>(url))).pipe(
  map((result: AxiosResponse<T>) => result.data),
);
