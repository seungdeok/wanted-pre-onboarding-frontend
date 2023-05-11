import { API_PATH, API_URL, BASE_URL } from '@/constants/api';
import { IClient, client } from '@/services/client';
import { StorageService } from './storageService';
import { STORAGE_KEYS } from '@/constants/storageKeys';

export interface IAuth {
  access_token: string;
  error?: string;
  message?: string;
  statusCode: number;
}

class AuthAPI {
  private instance: IClient;
  private apiPath: API_URL;

  constructor(instance: IClient, apiPath: API_URL) {
    this.instance = instance;
    this.apiPath = apiPath;
  }

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

    if (data.access_token) {
      StorageService.set(STORAGE_KEYS.token, data.access_token);

      return data;
    }

    return data;
  };

  signout = () => {
    return StorageService.remove(STORAGE_KEYS.token);
  };
}

const AuthService = new AuthAPI(client, `${BASE_URL}${API_PATH.auth}`);

export { AuthService };
