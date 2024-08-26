import { http, HttpResponse, delay } from 'msw';

import { API_URL } from '@/config/constants';

import { db } from '../db';
import { requireAuth } from '../utils';

const getExchangesHandler = http.get(
  `${API_URL}/exchanges`,
  async ({ request }) => {
    const url = new URL(request.url);
    const customerId = url.searchParams.get(
      'customerId'
    ) as string;

    const exchanges = db.exchange.findMany({
      where: {
        customerId: {
          equals: customerId,
        },
      },
    });
    await delay(300);
    return HttpResponse.json(exchanges, {
      status: 200,
    });
  }
);

const getExchangeHandler = http.get(
  `${API_URL}/exchanges/:exchangeId`,
  async (req) => {
    const exchangeId = req.params.exchangeId as string;

    const exchange = db.exchange.findFirst({
      where: {
        id: {
          equals: exchangeId,
        },
      },
    });

    if (!exchange) {
      await delay(300);
      return HttpResponse.json(
        { message: 'Not found!' },
        {
          status: 404,
        }
      );
    }

    await delay(300);
    return HttpResponse.json(exchange, {
      status: 200,
    });
  }
);

const createExchangeHandler = http.post(
  `${API_URL}/exchanges`,
  async (req) => {
    const user = requireAuth({ req });
    const exchangeData: any = await req.request.json();

    const exchange = db.exchange.create({
      ...exchangeData,
      customerId: user?.customerId,
    });

    await delay(300);
    return HttpResponse.json(
      { exchange },
      {
        status: 200,
      }
    );
  }
);

export const exchangesHandlers = [
  getExchangesHandler,
  getExchangeHandler,
  createExchangeHandler,
];
