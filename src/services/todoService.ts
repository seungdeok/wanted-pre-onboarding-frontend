import { API_PATH, API_URL, BASE_URL } from '@/constants/api';
import { IClient, client } from '@/services/client';
export interface ITodo {
  id: number;
  todo: string;
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

  createTodo = async ({ todo }: { todo: string }): Promise<ITodo> => {
    const data = await this.instance.post({
      url: this.apiPath,
      body: {
        todo,
      },
    });
    return data;
  };

  getTodos = async (): Promise<ITodo[]> => {
    const data = await this.instance.get({
      url: this.apiPath,
    });
    return data;
  };

  updateTodo = async ({
    id,
    todo,
    isCompleted,
  }: {
    id: string;
    todo: string;
    isCompleted: boolean;
  }): Promise<ITodo> => {
    const data = await this.instance.post({
      url: this.apiPath + `/${id}`,
      body: {
        todo,
        isCompleted,
      },
    });
    return data;
  };

  deleteTodo = async ({ id }: { id: string }): Promise<void> => {
    const data = await this.instance.post({
      url: this.apiPath + `/${id}`,
      body: {},
    });
    return data;
  };
}

const TodoService = new TodoAPI(client, `${BASE_URL}${API_PATH.todos}`);

export { TodoService };
