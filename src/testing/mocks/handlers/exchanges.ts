import { http, HttpResponse, delay } from 'msw';

import { API_URL } from '@/config/constants';

import { db } from '../db';
// import { requireAuth } from '../utils';

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

/* const createExchangeHandler = http.post(
  `${API_URL}/exchanges`,
  async (req) => {
    const user = requireAuth({req});
    console.log("333-", user);
    const exchangeData = await req.request.json();
    console.log("111", exchangeData);

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
); */

/* 
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
); */

export const exchangesHandlers = [
  getExchangesHandler,
  getExchangeHandler,
  // createExchangeHandler,
];
