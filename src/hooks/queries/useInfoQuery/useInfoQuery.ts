import { QUERY_KEYS } from '@/constants/queryKeys';
import { InfoService, ReturnType } from '@/services/infoService';
import {
  UseQueryOptions,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

interface Args {
  options?: UseQueryOptions<ReturnType, Error>;
}

export const useInfoQuery = ({
  options,
}: Args): UseQueryResult<ReturnType, Error> => {
  return useQuery<ReturnType, Error>(
    [QUERY_KEYS.INFO],
    () => InfoService.get(),
    options,
  );
};
