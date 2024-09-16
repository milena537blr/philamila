import DashboardExchangePage from '@/pages/dashboard/exchanges/[exchangeId]';
import { testData } from '@/testing/test-data';
import {
  appRender,
  screen,
  waitForLoadingToFinish,
} from '@/testing/test-utils';

const exchange = testData.exchanges[0];

const router = {
  query: {
    exchangeId: exchange.id,
  },
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

describe('Dashboard Exchange Page', () => {
  it('should render all the exchange details', async () => {
    await appRender(<DashboardExchangePage />);

    await waitForLoadingToFinish();

    const exchangePosition = screen.getByRole('heading', {
      name: exchange.number,
    });

    const info = screen.getByText(exchange.number);

    expect(exchangePosition).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });
});
