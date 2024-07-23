import { Stack, Button } from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ReactElement } from 'react';

import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import { PublicExchangeInfo } from '@/features/exchanges';
import { PublicLayout } from '@/layouts/public-layout';
import {
  getExchange,
  getCustomer,
} from '@/testing/test-data';

type PublicExchangePageProps =
  InferGetServerSidePropsType<typeof getServerSideProps>;

export const PublicExchangePage = ({
  exchange,
  customer,
}: PublicExchangePageProps) => {
  const isInvalid =
    !exchange ||
    !customer ||
    customer.id !== exchange.customerId;

  if (isInvalid) {
    return <NotFound />;
  }

  return (
    <>
      <Seo
        title={`${exchange.number} | ${exchange.locationFrom}`}
      />
      <Stack w="full">
        <PublicExchangeInfo exchange={exchange} />
        <Button
          bg="primary"
          color="primaryAccent"
          _hover={{
            opacity: '0.9',
          }}
          as="a"
          href={`mailto:${customer?.email}?subject=Application for ${exchange.number} number`}
          target="_blank"
        >
          Apply
        </Button>
      </Stack>
    </>
  );
};

PublicExchangePage.getLayout = function getLayout(
  page: ReactElement
) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default PublicExchangePage;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const customerId = params?.customerId as string;
  const exchangeId = params?.exchangeId as string;

  const [customer, exchange] = await Promise.all([
    getCustomer(customerId).catch(() => null),
    getExchange(exchangeId).catch(() => null),
  ]);

  return {
    props: {
      exchange,
      customer,
    },
  };
};
