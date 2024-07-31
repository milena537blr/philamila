import { testData } from '../test-data';

import { db } from './db';

export const seedDb = () => {
  const userCount = db.user.count();

  if (userCount > 0) return;

  testData.users.forEach((user) => db.user.create(user));

  testData.customers.forEach((customer) =>
    db.customer.create(customer)
  );

  testData.exchanges.forEach((exchange) =>
    db.exchange.create(exchange)
  );
};
