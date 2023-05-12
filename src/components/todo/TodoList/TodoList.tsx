import { ITodo } from '@/services/todoService';
import { TodoItem } from '../TodoItem';

interface Props {
  isLoading: boolean;
  data: {
    data: ITodo[] | undefined;
  };
}

export const TodoList = ({ isLoading, data }: Props) => {
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (!data.data || !data.data.length) {
    return <div>목록이 비어있습니다</div>;
  }

  return (
    <ul>
      {data.data.map((item: ITodo) => {
        return <TodoItem key={item.id} id={item.id} todo={item.todo} />;
      })}
    </ul>
  );
};
