import { Entity } from '@/types';

export type Exchange = Entity & {
  customerId: string;
  position: string;
  info: string;
  location: string;
  department: string;
};

export type CreateExchangeData = Pick<
  Exchange,
  'position' | 'department' | 'location' | 'info'
>;
