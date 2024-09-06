import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import { CreateExchangeForm } from '@/features/exchanges';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { useNotifications } from '@/stores/notifications';

const DashboardCreateExchangePage = () => {
  const router = useRouter();
  const { showNotification } = useNotifications();

  const onSuccess = () => {
    showNotification({
      type: 'success',
      title: 'Success',
      duration: 5000,
      message: 'Exchange Created!',
    });
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
