import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

export const fetcher = (options: AxiosRequestConfig) =>
  api({ ...options,  }).then((res) => res.data)

export const baseURL = 'https://restcountries.com/v3.1'

export const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
    timeout: 30000, // 30 seconds
})
