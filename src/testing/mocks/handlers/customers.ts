import { rest } from 'msw';

import { API_URL } from '@/config/constants';

import { db } from '../db';

const getCustomerHandler = rest.get(
  `${API_URL}/customers/:customerId`,
  (req, res, ctx) => {
    const customerId = req.params.customerId as string;

    const customer = db.customer.findFirst({
      where: {
        id: {
          equals: customerId,
        },
      },
    });

    if (!customer) {
      return res(
        ctx.status(404),
        ctx.json({ message: 'Not found!' })
      );
    }

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(customer)
    );
  }
);

export const customersHandlers = [getCustomerHandler];
