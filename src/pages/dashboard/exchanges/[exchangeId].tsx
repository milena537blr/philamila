import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Loading } from '@/components/loading';
import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import { DashboardExchangeInfo } from '@/features/exchanges';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { useExchange } from '@/testing/test-data';

const DashboardExchangePage = () => {
  const router = useRouter();
  const exchangeId = router.query.exchangeId as string;

  const exchange = useExchange(exchangeId);

  if (exchange.isLoading) {
    return <Loading />;
  }

  if (!exchange.data) {
    return <NotFound />;
  }

  return (
    <>
      <Seo
        title={`${exchange.data.number} | ${exchange.data.locationFrom}`}
      />
      <DashboardExchangeInfo exchange={exchange.data} />
    </>
  );
};

DashboardExchangePage.getLayout = function getLayout(
  page: ReactElement
) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardExchangePage;
