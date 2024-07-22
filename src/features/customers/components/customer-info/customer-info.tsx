import { Heading, Stack } from '@chakra-ui/react';

import { Content } from '@/components/content';
import { InfoCard } from '@/components/info-card';

import { Customer } from '../../types';

export const CustomerInfo = ({
  customer,
}: {
  customer: Customer;
}) => {
  return (
    <>
      <Stack
        w="full"
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Heading>{customer?.name}</Heading>
        <Stack
          w={{ base: 'full', md: 'auto' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <InfoCard
            label="Email"
            value={customer.email}
          />
          <InfoCard
            label="Phone Number"
            value={customer.phone}
          />
        </Stack>
      </Stack>

      <Content>{customer.info}</Content>
    </>
  );
};
