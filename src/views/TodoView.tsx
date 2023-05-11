import { TodoLayout } from '@/components/todo/Layout';
import { TodoForm } from '@/components/todo/TodoForm';
import { useAuth } from '@/hooks/useAuth';

export const TodoView = () => {
  useAuth();
  return (
    <TodoLayout>
      <h1>TODO</h1>
      <TodoForm />
    </TodoLayout>
  );
};
