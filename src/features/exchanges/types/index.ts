import { Entity } from '@/types';

export type Exchange = Entity & {
  number: string;
  customerId: string;
  locationFrom: string;
  locationTo: string;
};

export type CreateExchangeData = Pick<
  Exchange,
  'number' | 'locationFrom' | 'locationTo'
>;
