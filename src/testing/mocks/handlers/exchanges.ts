import { rest } from 'msw';

import { API_URL } from '@/config/constants';

import { db } from '../db';
import { requireAuth } from '../utils';

const getExchangesHandler = rest.get(
  `${API_URL}/exchanges`,
  async (req, res, ctx) => {
    const customerId = req.url.searchParams.get(
      'customerId'
    ) as string;

    const exchanges = db.exchange.findMany({
      where: {
        customerId: {
          equals: customerId,
        },
      },
    });

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(exchanges)
    );
  }
);

const getExchangeHandler = rest.get(
  `${API_URL}/exchanges/:exchangeId`,
  async (req, res, ctx) => {
    const exchangeId = req.params.exchangeId as string;

    const exchange = db.exchange.findFirst({
      where: {
        id: {
          equals: exchangeId,
        },
      },
    });

    if (!exchange) {
      return res(
        ctx.delay(300),
        ctx.status(404),
        ctx.json({ message: 'Not found!' })
      );
    }

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(exchange)
    );
  }
);

const createExchangeHandler = rest.post(
  `${API_URL}/exchanges`,
  async (req, res, ctx) => {
    const user = requireAuth({ req });

    const exchangeData = await req.json();

    const exchange = db.exchange.create({
      ...exchangeData,
      customerId: user?.customerId,
    });

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(exchange)
    );
  }
);

export const exchangesHandlers = [
  getExchangesHandler,
  getExchangeHandler,
  createExchangeHandler,
];
