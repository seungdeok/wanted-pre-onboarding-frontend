import { TodoLayout } from '@/components/todo/Layout';
import { TodoForm } from '@/components/todo/TodoForm';

export const TodoView = () => {
  return (
    <TodoLayout>
      <h1>TODO</h1>
      <TodoForm />
    </TodoLayout>
  );
};
