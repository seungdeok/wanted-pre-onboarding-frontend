import { API_PATH, API_URL, BASE_URL } from '@/constants/api';
import { IClient, client } from '@/services/client';

export interface IAuth {
  access_token: string;
}

class AuthAPI {
  private instance: IClient;
  private apiPath: API_URL;

  constructor(instance: IClient, apiPath: API_URL) {
    this.instance = instance;
    this.apiPath = apiPath;
  }

  async signup(): Promise<IAuth> {
    const data = await this.instance.post({
      url: this.apiPath + '/signup',
      body: {},
    });
    return data;
  }

  async signin(): Promise<void> {
    const data = await this.instance.post({
      url: this.apiPath + '/signin',
      body: {},
    });
    return data;
  }
}

const AuthService = new AuthAPI(client, `${BASE_URL}${API_PATH.auth}`);

export { AuthService };
