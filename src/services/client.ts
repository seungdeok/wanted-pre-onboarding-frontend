import { BASE_URL } from '@/constants/api';
import axios from 'axios';

const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(
  config => {
    // 요청을 보내기 전에 수행
    return config;
  },
  error => {
    // 오류 요청을 보내기전 수행
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  response => {
    // 응답 데이터를 가공
    return response;
  },
  error => {
    // 오류 응답을 처리
    return Promise.reject(error);
  },
);

export { client };
