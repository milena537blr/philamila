// import { rest } from 'msw';
import { http, HttpResponse } from 'msw';

import { API_URL } from '@/config/constants';

// import { authHandlers } from './auth';
// import { customersHandlers } from './customers';
// import { exchangesHandlers } from './exchanges';

export const handlers = [
  // ...authHandlers,
  // ...exchangesHandlers,
  // ...customersHandlers,
  /* rest.get(`${API_URL}/healthcheck`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ healthy: true })
    );
  }), */
  http.get(`${API_URL}/healthcheck`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({ healthy: true });
  }),
];
