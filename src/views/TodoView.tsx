import { TodoLayout } from '@/components/todo/Layout';
import { TodoForm } from '@/components/todo/TodoForm';
import { useTodoQuery } from '@/hooks/queries/useTodoQuery';
import { useAuth } from '@/hooks/useAuth';

export const TodoView = () => {
  const { isLoading, data, refetch } = useTodoQuery({ options: {} });

  useAuth();
  return (
    <TodoLayout isLoggedIn={true}>
      <h1>TODO</h1>
      <TodoForm isLoading={isLoading} data={data} refetch={refetch} />
    </TodoLayout>
  );
};
