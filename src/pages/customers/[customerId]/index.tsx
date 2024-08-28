import { Heading, Stack } from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ReactElement } from 'react';

import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import {
  getCustomer,
  CustomerInfo,
} from '@/features/customers';
import {
  ExchangesList,
  Exchange,
  getExchanges,
} from '@/features/exchanges';
import { PublicLayout } from '@/layouts/public-layout';

type PublicCustomerPageProps =
  InferGetServerSidePropsType<typeof getServerSideProps>;

const PublicCustomerPage = ({
  customer,
  exchanges,
}: PublicCustomerPageProps) => {
  if (!customer) return <NotFound />;

  return (
    <>
      <Seo title={customer.name} />
      <Stack
        spacing="4"
        w="full"
        maxW="container.lg"
        mx="auto"
        mt="12"
        p="4"
      >
        <CustomerInfo customer={customer} />
        <Heading size="md" my="6">
          Open Exchanges
        </Heading>
        <ExchangesList
          exchanges={exchanges}
          customerId={customer.id}
          type="public"
        />
      </Stack>
    </>
  );
};

PublicCustomerPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default PublicCustomerPage;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const customerId = params?.customerId as string;

  const [customer, exchanges] = await Promise.all([
    getCustomer({ customerId }).catch(() => null),
    getExchanges({
      params: {
        customerId: customerId,
      },
    }).catch(() => [] as Exchange[]),
  ]);

  return {
    props: {
      customer,
      exchanges,
    },
  };
};
