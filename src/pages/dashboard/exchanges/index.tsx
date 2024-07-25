import { PlusSquareIcon } from '@chakra-ui/icons';
import { Heading, HStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { Link } from '@/components/link';
import { Loading } from '@/components/loading';
import { Seo } from '@/components/seo';
import { ExchangesList } from '@/features/exchanges';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import {
  useExchanges,
  useUser,
} from '@/testing/test-data';

const DashboardExchangesPage = () => {
  const user = useUser();

  const exchanges = useExchanges(
    user.data?.customerId ?? ''
  );

  if (exchanges.isLoading) return <Loading />;

  if (!user.data) return null;

  return (
    <>
      <Seo title="Exchanges" />
      <HStack
        mb="8"
        align="center"
        justify="space-between"
      >
        <Heading>Exchanges</Heading>
        <Link
          icon={<PlusSquareIcon />}
          variant="solid"
          href="/dashboard/exchanges/create"
        >
          Create Exchange
        </Link>
      </HStack>
      <ExchangesList
        exchanges={exchanges.data || []}
        isLoading={exchanges.isLoading}
        customerId={user.data.customerId}
        type="dashboard"
      />
    </>
  );
};

DashboardExchangesPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardExchangesPage;
