import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import { Exchange } from '../types';

type GetExchangesOptions = {
  params: {
    customerId: string | undefined;
  };
};

export const getExchanges = ({
  params,
}: GetExchangesOptions): Promise<Exchange[]> => {
  return apiClient.get('/exchanges', {
    params,
  });
};

export const useExchanges = ({
  params,
}: GetExchangesOptions) => {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ['exchanges', params],
    queryFn: () => getExchanges({ params }),
    enabled: !!params.customerId,
    initialData: [],
  });

  return {
    data,
    isLoading: isFetching && !isFetched,
  };
};
