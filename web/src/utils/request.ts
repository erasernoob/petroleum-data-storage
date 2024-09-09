import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { isDevEnv } from "./env.js";

const instance = axios.create({
  baseURL: isDevEnv ? "http://localhost:2233/bff" : "",
  headers: {
    "Content-Type": "application/json",
    "Is-BFF-Cute": `${isDevEnv}`,
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在这里可以添加请求前的逻辑，例如添加token等
    return config;
  },
  (error: Error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response;
  },
  (error: Error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

const request = {
  get: (url: string, data = {}) => {
    return instance({
      method: "GET",
      url,
      params: data,
    });
  },

  post: (url: string, data = {}) => {
    return instance({
      method: "POST",
      url,
      data,
    });
  },

  put: (url: string, data: Record<string, string> = {}) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    return instance({
      method: "PUT",
      url,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default request;
