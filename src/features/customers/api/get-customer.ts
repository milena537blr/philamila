import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import { Customer } from '../types';

type GetCustomerOptions = {
  customerId: string;
};

export const getCustomer = ({
  customerId,
}: GetCustomerOptions): Promise<Customer> => {
  return apiClient.get(`/customers/${customerId}`);
};

export const useCustomer = ({
  customerId,
}: GetCustomerOptions) => {
  const { data, isLoading } = useQuery({
    queryKey: ['customers', customerId],
    queryFn: () => getCustomer({ customerId }),
  });

  return { data, isLoading };
};
