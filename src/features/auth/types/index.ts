import { Entity } from '@/types';

export type AuthUser = Entity & {
  email: string;
  customerId: string;
};

export type LoginData = {
  email: string;
  password: string;
};
