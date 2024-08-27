import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { Exchange, CreateExchangeData } from '../types';

type CreateExchangeOptions = {
  data: CreateExchangeData;
};

export const createExchange = ({
  data,
}: CreateExchangeOptions): Promise<Exchange> => {
  return apiClient.post(`/exchanges`, data);
};

type UseCreateExchangeOptions = {
  onSuccess?: (exchange: Exchange) => void;
};

export const useCreateExchange = ({
  onSuccess,
}: UseCreateExchangeOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: createExchange,
    onSuccess: (exchange) => {
      queryClient.invalidateQueries(['exchanges']);
      onSuccess?.(exchange);
    },
  });

  return { submit, isLoading };
};
