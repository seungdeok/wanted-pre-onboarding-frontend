import { QUERY_KEYS } from '@/constants/queryKeys';
import { TodoService } from '@/services/todoService';
import {
  UseQueryOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

interface Args {
  options?: UseQueryOptions<any, Error>;
}

export const useTodoQuery = ({ options }: Args): UseQueryResult<any, Error> => {
  return useQuery<any, Error>([QUERY_KEYS.todo], TodoService.getTodos, options);
};
