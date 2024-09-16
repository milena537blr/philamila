import PublicExchangePage, {
  getServerSideProps,
} from '@/pages/customers/[customerId]/exchanges/[exchangeId]';
import { testData } from '@/testing/test-data';
import { appRender, screen } from '@/testing/test-utils';

const exchange = testData.exchanges[0];
const customer = testData.customers[0];

describe('Public Exchange Page', () => {
  it('should use getServerSideProps that fetches and returns the proper data', async () => {
    const { props } = await getServerSideProps({
      params: {
        exchangeId: exchange.id,
        customerId: customer.id,
      },
    } as any);

    expect(props.exchange).toEqual(exchange);
    expect(props.customer).toEqual(customer);
  });

  it('should render the exchange details', async () => {
    appRender(
      <PublicExchangePage
        customer={customer}
        exchange={exchange}
      />
    );

    const exchangePosition = screen.getByRole('heading', {
      name: exchange.number,
    });

    const info = screen.getByText(exchange.number);

    expect(exchangePosition).toBeInTheDocument();
    expect(info).toBeInTheDocument();
  });

  it('should render the not found message if the data does not exist', async () => {
    const { rerender } = appRender(
      <PublicExchangePage
        customer={null}
        exchange={null}
      />
    );

    const notFoundMessage = screen.getByRole('heading', {
      name: /not found/i,
    });

    expect(notFoundMessage).toBeInTheDocument();

    rerender(
      <PublicExchangePage
        customer={customer}
        exchange={null}
      />
    );

    expect(notFoundMessage).toBeInTheDocument();

    rerender(
      <PublicExchangePage
        customer={null}
        exchange={exchange}
      />
    );

    expect(notFoundMessage).toBeInTheDocument();

    rerender(
      <PublicExchangePage
        customer={customer}
        exchange={{ ...exchange, customerId: '123' }}
      />
    );

    expect(notFoundMessage).toBeInTheDocument();
  });
});
