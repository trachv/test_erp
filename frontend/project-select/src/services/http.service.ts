import axios, { AxiosInstance, AxiosResponse } from "axios";

interface IConfig {
  url: string;
  params?: {};
  data?: any;
  headers?: {};
}

export class HttpService<Type> {
  static DEFAULT_HEADERS = {
    "Content-Type": "application/json",
  };

  private axios: AxiosInstance;

  constructor(baseUrl = process.env.REACT_APP_API_URL, apiVersion = "api") {
    this.axios = axios.create({
      baseURL: `${baseUrl}/${apiVersion}/`,
		});
		console.log(`${baseUrl}/${apiVersion}/`);
		
  }

  get({ url, params }: IConfig): Promise<AxiosResponse<Type | Type[]>> {
    return this.axios.get(url, {
      params,
      headers: {
        ...HttpService.DEFAULT_HEADERS,
      },
    });
  }

  post({ url, data }: IConfig): Promise<AxiosResponse<Type>> {
    return this.axios.post(url, data);
  }

  put({ url, data }: IConfig): Promise<AxiosResponse<Type>> {
    return this.axios.put(url, data);
  }

  delete({ url }: IConfig) {
    return this.axios.delete(url);
  }
}
