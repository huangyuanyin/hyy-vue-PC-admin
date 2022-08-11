import axios from "axios";
import { useRouter } from "vue-router";

const service = axios.create({
  baseURL: "",
  timeout: 5000,
});
// request interceptor
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
// response interceptor
service.interceptors.response.use(
  (response) => {
    console.log("response", response)
    const res = response.data;
    return res
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
