import { API_PATH, API_URL, BASE_URL } from '@/constants/api';
import { IClient, client } from '@/services/client';

export interface ITodo {
  id: number;
  name: string;
  isCompleted: boolean;
  userId: number;
}

class TodoAPI {
  private instance: IClient;
  private apiPath: API_URL;

  constructor(instance: IClient, apiPath: API_URL) {
    this.instance = instance;
    this.apiPath = apiPath;
  }

  async createTodo({ todo }: { todo: string }): Promise<ITodo> {
    const data = await this.instance.post({
      url: this.apiPath,
      body: {
        todo,
      },
    });
    return data;
  }

  async getTodos(): Promise<ITodo[]> {
    const data = await this.instance.get({
      url: this.apiPath,
    });
    return data;
  }

  async updateTodo({
    id,
    todo,
    isCompleted,
  }: {
    id: string;
    todo: string;
    isCompleted: boolean;
  }): Promise<ITodo> {
    const data = await this.instance.post({
      url: this.apiPath + `/${id}`,
      body: {
        todo,
        isCompleted,
      },
    });
    return data;
  }

  async deleteTodo({ id }: { id: string }): Promise<void> {
    const data = await this.instance.post({
      url: this.apiPath + `/${id}`,
      body: {},
      headers: {},
    });
    return data;
  }
}

const TodoService = new TodoAPI(client, `${BASE_URL}${API_PATH.todos}`);

export { TodoService };
