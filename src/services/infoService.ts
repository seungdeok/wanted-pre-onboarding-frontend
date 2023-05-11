import { API_PATH, API_URL, BASE_URL } from '@/constants/api';
import type { AxiosInstance } from 'axios';
import { client } from './client';

export interface ReturnType {
  name: string;
}

class InfoAPI {
  private instance: AxiosInstance;
  private apiPath: API_URL;

  constructor(instance: AxiosInstance, apiPath: API_URL) {
    this.instance = instance;
    this.apiPath = apiPath;
  }

  async get(): Promise<ReturnType> {
    const response = await this.instance.get(this.apiPath);
    return response.data;
  }
}

const InfoService = new InfoAPI(client, `${BASE_URL}${API_PATH.INFO}`);

export { InfoService };
