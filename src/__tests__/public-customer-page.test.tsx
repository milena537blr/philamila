import PublicCustomerPage, {
  getServerSideProps,
} from '@/pages/customers/[customerId]';
import { testData } from '@/testing/test-data';
import {
  appRender,
  checkTableValues,
  screen,
} from '@/testing/test-utils';

const customer = testData.customers[0];
const exchanges = testData.exchanges;

describe('Public Customer Page', () => {
  it('should use getServerSideProps that fetches and returns the proper data', async () => {
    const { props } = await getServerSideProps({
      params: {
        customerId: customer.id,
      },
    } as any);

    expect(props.customer).toEqual(customer);
    expect(props.exchanges).toEqual(exchanges);
  });

  it('should render the customer details', async () => {
    appRender(
      <PublicCustomerPage
        customer={customer}
        exchanges={exchanges}
      />
    );

    expect(
      screen.getByRole('heading', {
        name: customer.name,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: customer.email,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: customer.phone,
      })
    ).toBeInTheDocument();

    checkTableValues({
      container: screen.getByTestId('exchanges-list'),
      data: exchanges,
      columns: ['number', 'locationFrom', 'locationTo'],
    });
  });

  it('should render the not found message if the customer is not found', async () => {
    appRender(
      <PublicCustomerPage
        customer={null}
        exchanges={[]}
      />
    );

    const notFoundMessage = screen.getByRole('heading', {
      name: /not found/i,
    });

    expect(notFoundMessage).toBeInTheDocument();
  });
});
