import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import { Exchange } from '../types';

type GetExchangeOptions = {
  exchangeId: string;
};

export const getExchange = ({
  exchangeId,
}: GetExchangeOptions): Promise<Exchange> => {
  return apiClient.get(`/exchanges/${exchangeId}`);
};

export const useExchange = ({
  exchangeId,
}: GetExchangeOptions) => {
  const { data, isLoading } = useQuery({
    queryKey: ['exchanges', exchangeId],
    queryFn: () => getExchange({ exchangeId }),
  });

  return { data, isLoading };
};
