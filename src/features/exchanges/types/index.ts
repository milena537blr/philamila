import { Entity } from '@/types';

export type Exchange = Entity & {
  userId: string;
  to: string;
  name: string;
};

export type CreateExchangeData = Pick<
  Exchange,
  'userId' | 'to' | 'name'
>;
