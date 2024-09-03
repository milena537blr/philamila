import { http, HttpResponse, delay } from 'msw';

import { API_URL } from '@/config/constants';

import {
  authenticate,
  requireAuth,
  AUTH_COOKIE,
} from '../utils';

const loginHandler = http.post(
  `${API_URL}/auth/login`,
  async ({ request }) => {
    const credentials: any = await request.json();
    const { user, jwt } = authenticate(credentials);
    await delay(300);
    // console.log(`${AUTH_COOKIE}=${jwt}; Path=/; HttpOnly;`);
    return HttpResponse.json(
      { user },
      {
        headers: {
          'Set-Cookie': `${AUTH_COOKIE}=${jwt}; Path=/;`,
        },
      }
    );
  }
);

const logoutHandler = http.post(
  `${API_URL}/auth/logout`,
  async () => {
    await delay(300);
    return HttpResponse.json(
      { success: true },
      {
        headers: {
          'Set-Cookie': `${AUTH_COOKIE}=; Path=/;`,
        },
      }
    );
  }
);

const meHandler = http.get(
  `${API_URL}/auth/me`,
  async (req) => {
    const user = requireAuth({
      req,
      shouldThrow: false,
    });
    await delay(300);
    return HttpResponse.json(user);
  }
);

export const authHandlers = [
  loginHandler,
  logoutHandler,
  meHandler,
];
