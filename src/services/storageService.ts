import { isClient } from '@/utils/isClient';

export interface IData {
  access_token: string;
}

export type IStorage = Storage | null;

class StorageAPI {
  private instance: IStorage;

  constructor(instance: IStorage) {
    this.instance = instance;
  }

  get = (key: string) => {
    if (!this.instance) return null;
    return this.instance.getItem(key);
  };

  set = (key: string, value: string) => {
    if (!this.instance) return null;
    return this.instance.setItem(key, value);
  };

  remove = (key: string) => {
    if (!this.instance) return null;
    return this.instance.removeItem(key);
  };
}

const StorageService = new StorageAPI(isClient() ? window.localStorage : null);

export { StorageService };
