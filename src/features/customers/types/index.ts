import { Entity } from '@/types';

export type Customer = Entity & {
  adminId: string;
  name: string;
  email: string;
  phone: string;
  info: string;
};
