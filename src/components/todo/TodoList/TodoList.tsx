import { ITodo } from '@/types/todo';
import { TodoItem } from '../TodoItem';

interface Props {
  data: ITodo[];
}

export const TodoList = ({ data }: Props) => {
  if (!data.length) {
    return <div>목록이 비어있습니다</div>;
  }

  return (
    <ul>
      {data.map((item: ITodo) => {
        return <TodoItem key={item.id} id={item.id} name={item.name} />;
      })}
    </ul>
  );
};
