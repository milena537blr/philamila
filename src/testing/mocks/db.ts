import { factory, primaryKey } from '@mswjs/data';

import { uid } from '@/utils/uid';

const models = {
  user: {
    id: primaryKey(uid),
    createdAt: Date.now,
    email: String,
    password: String,
    customerId: String,
  },
  customer: {
    id: primaryKey(uid),
    createdAt: Date.now,
    adminId: String,
    name: String,
    email: String,
    phone: String,
    info: String,
  },
  exchange: {
    id: primaryKey(uid),
    createdAt: Date.now,
    customerId: String,
    position: String,
    info: String,
    location: String,
    department: String,
  },
};

export const db = factory(models);
