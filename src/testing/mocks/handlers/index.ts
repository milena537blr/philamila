// import { rest } from 'msw';
import { http, HttpResponse } from 'msw';

import { API_URL } from '@/config/constants';

import { authHandlers } from './auth';
import { customersHandlers } from './customers';
import { exchangesHandlers } from './exchanges';

export const handlers = [
  ...authHandlers,
  ...exchangesHandlers,
  ...customersHandlers,
  http.get(`${API_URL}/healthcheck`, () => {
    return HttpResponse.json(
      { healthy: true },
      {
        status: 200,
        statusText: 'Healthy',
      }
    );
  }),
];
