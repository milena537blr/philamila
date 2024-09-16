import DashboardCreateExchangePage from '@/pages/dashboard/exchanges/create';
import {
  appRender,
  screen,
  userEvent,
  waitFor,
} from '@/testing/test-utils';

const router = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

const exchangeData = {
  number: 'Software Engineer',
  locationFrom: 'London',
  locationTo: 'USA',
  department: 'Engineering',
  info: 'Lorem Ipsum',
};

describe('Dashboard Create Exchange Page', () => {
  it('should create a new exchange', async () => {
    appRender(<DashboardCreateExchangePage />);

    const numberInput = screen.getByRole('textbox', {
      name: /number/i,
    });

    const locationFromInput = screen.getByRole(
      'textbox',
      {
        name: /locationFrom/i,
      }
    );

    const locationToInput = screen.getByRole('textbox', {
      name: /locationTo/i,
    });

    const submitButton = screen.getByRole('button', {
      name: /create/i,
    });

    userEvent.type(numberInput, exchangeData.number);
    userEvent.type(
      locationFromInput,
      exchangeData.locationFrom
    );
    userEvent.type(
      locationToInput,
      exchangeData.locationTo
    );

    userEvent.click(submitButton);

    await waitFor(() =>
      expect(
        screen.getByText(/exchange created!/i)
      ).toBeInTheDocument()
    );
  });
});
