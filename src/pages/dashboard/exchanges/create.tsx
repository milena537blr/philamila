import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import { CreateExchangeForm } from '@/features/exchanges';
import { DashboardLayout } from '@/layouts/dashboard-layout';

const DashboardCreateExchangePage = () => {
  const router = useRouter();

  const onSuccess = () => {
    router.push(`/dashboard/exchanges`);
  };

  return (
    <>
      <Seo title="Create Exchange" />
      <Heading mb="8">Create Exchange</Heading>
      <CreateExchangeForm onSuccess={onSuccess} />
    </>
  );
};

DashboardCreateExchangePage.getLayout =
  function getLayout(page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
  };

export default DashboardCreateExchangePage;
