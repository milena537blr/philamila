import { http, HttpResponse, delay } from 'msw';

import { API_URL } from '@/config/constants';

import { db } from '../db';

const getCustomerHandler = http.get(
  `${API_URL}/customers/:customerId`,
  async (req) => {
    const customerId = req.params.customerId as string;

    const customer = db.customer.findFirst({
      where: {
        id: {
          equals: customerId,
        },
      },
    });

    if (!customer) {
      return HttpResponse.json(
        { message: 'Not found!' },
        {
          status: 404,
        }
      );
    }
    await delay(300);
    return HttpResponse.json(customer, {
      status: 200,
    });
  }
);

export const customersHandlers = [getCustomerHandler];
