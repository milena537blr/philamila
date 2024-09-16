import DashboardExchangesPage from '@/pages/dashboard/exchanges';
import { getUser } from '@/testing/mocks/utils';
import { testData } from '@/testing/test-data';
import {
  appRender,
  checkTableValues,
  screen,
  waitForLoadingToFinish,
  waitFor,
} from '@/testing/test-utils';

jest.mock('@/features/auth', () => ({
  useUser: () => ({ data: getUser() }),
}));

describe('Dashboard Exchanges Page', () => {
  it('should render the exchanges list', async () => {
    await appRender(<DashboardExchangesPage />);

    await waitFor(() => {
      expect(
        screen.getByText(/exchanges/i)
      ).toBeInTheDocument();
    });

    await waitForLoadingToFinish();

    checkTableValues({
      container: screen.getByTestId('exchanges-list'),
      data: testData.exchanges,
      columns: ['number', 'locationFrom', 'locationTo'],
    });
  });
});
