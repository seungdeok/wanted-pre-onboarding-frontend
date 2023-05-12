import { API_URL } from '@/constants/api';
import { IClient, client } from '@/services/client';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { isClient } from '@/utils/isClient';

export interface IAuth {
  data: { access_token?: string; error?: string; message?: string };
  statusCode: number;
}

export interface IData {
  access_token: string;
}

export type IStorage = Storage | null;
class AuthAPI {
  private instance: IClient;
  private apiPath: API_URL;
  private storage: IStorage;

  constructor(instance: IClient, apiPath: API_URL, storage: IStorage) {
    this.instance = instance;
    this.apiPath = apiPath;
    this.storage = storage;
  }

  isLoggedIn = () => {
    if (!this.storage) return false;
    return this.storage.getItem(STORAGE_KEYS.token) !== '';
  };

  getToken = () => {
    if (!this.storage) return null;
    return this.storage.getItem(STORAGE_KEYS.token);
  };

  signup = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<IAuth> => {
    const data = await this.instance.post({
      url: this.apiPath + '/signup',
      body: {
        email,
        password,
      },
    });
    return data;
  };

  signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<IAuth> => {
    const data = await this.instance.post({
      url: this.apiPath + '/signin',
      body: {
        email,
        password,
      },
    });

    if (data.data.access_token) {
      if (this.storage) {
        this.storage.setItem(STORAGE_KEYS.token, data.data.access_token);
      }

      return data;
    }

    return data;
  };

  signout = () => {
    if (!this.storage) return null;
    return this.storage.removeItem(STORAGE_KEYS.token);
  };
}

const AuthService = new AuthAPI(
  client,
  API_URL.auth,
  isClient() ? window.localStorage : null,
);

export { AuthService };