import { useEffect, useState } from 'react';

export const testData = {
  users: [
    {
      id: 'KV4Lv9yUHtNVB42V0ZrFf',
      createdAt: 1645628972465,
      email: 'user1@test.com',
      password: 'password',
      customerId: 'amYXmIyT9mD9GyO6CCr',
    },
  ],
  customers: [
    {
      id: 'amYXmIyT9mD9GyO6CCr',
      createdAt: 1645628972465,
      adminId: 'KV4Lv9yUHtNVB42V0ZrFf',
      name: 'Test Customer 1',
      email: 'cust1@test.com',
      phone: '944-528-1711',
      info: 'Totam alias fuga enim esse ullam sit. Nisi animi ut at voluptatem odit nam ea. Et fuga consequatur similique asperiores non suscipit corrupti aperiam. Molestiae quae aut laborum soluta blanditiis cupiditate hic nobis provident.Et quae aut labore aut rerum. Nisi at autem. Enim ipsum enim consectetur sequi consequatur. Sint qui qui quam. Voluptas dignissimos rem et natus. Autem et mollitia hic suscipit illum placeat.Optio aut sit assumenda quo eius omnis sed non consequatur. Numquam perferendis ea sit rerum officia cupiditate aut itaque doloremque. Itaque alias est repellendus. Esse consectetur tenetur velit autem excepturi. Velit perspiciatis saepe dolorum fugiat. Adipisci odio porro quibusdam similique sunt temporibus ipsam.Dolor assumenda aut qui et in perferendis et. Possimus quam qui impedit. Nesciunt aliquid qui consequatur possimus eos velit deserunt magni qui. Nam accusantium libero corrupti.Nulla in ut sunt rerum voluptatem rerum voluptates. Quis expedita natus earum similique officiis rem. Possimus similique architecto ut ad ea quia laborum. Officia voluptatibus quos aliquid delectus. Est voluptates necessitatibus iure et provident iusto at voluptatem sit. Molestiae exercitationem repellat tempore. Id excepturi officiis iste ullam similique et hic sit. Quis et eaque quidem. Qui voluptas ea et rem recusandae suscipit voluptatem sit. Sint ut officiis nihil perferendis nihil quibusdam molestiae. Blanditiis nihil ab illo. Voluptatem mollitia officia aperiam. Esse voluptatum voluptatem nihil minima. Placeat itaque aut numquam. Quis nobis commodi voluptatum ipsum perspiciatis aut. Omnis nulla enim natus architecto in. Autem ab aperiam vitae ipsa quia. Adipisci deleniti voluptas ea nam nesciunt. Doloribus delectus modi et. Voluptatem qui sit eaque qui totam. In facilis excepturi et quae et ullam maiores et sit. Enim consequatur dolorem dolorem eum ullam rerum cum similique odit. Aut velit rem est id et tenetur ut. Velit sunt et velit odit qui mollitia aut harum aut. Cupiditate doloribus dicta reprehenderit aliquid consequatur eum voluptas veritatis. Ut corporis sed et magni consequatur voluptatem.',
    },
  ],
  exchanges: [
    {
      id: 'wS6UeppUQoiXGTzAI6XrM',
      number: 'US-01',
      locationFrom: 'USA',
      locationTo: 'Belarus',
      createdAt: 1647070016299,
      customerId: 'amYXmIyT9mD9GyO6CCr',
    },
  ],
};

const delayedFn =
  <T, A extends any[]>(
    fn: (...args: A) => T,
    ms: number
  ) =>
  (...args: A) => {
    return new Promise<T>((resolve) =>
      setTimeout(() => resolve(fn(...args)), ms)
    );
  };

export const getUser = delayedFn(
  () => testData.users[0],
  0
);

export const getCustomer = delayedFn(
  (id: string) =>
    testData.customers.find((o) => o.id === id) || null,
  300
);

export const getExchanges = delayedFn(
  (customerId: string) =>
    testData.exchanges.filter(
      (j) => j.customerId === customerId
    ),
  300
);

export const getExchange = delayedFn(
  (id: string) =>
    testData.exchanges.find((j) => j.id === id) || null,
  300
);

const useTestData = <T>(promise: Promise<T>) => {
  const [testData, setTestData] = useState<T | null>(
    null
  );

  useEffect(() => {
    if (!testData) {
      promise.then(setTestData);
    }
  }, [promise, testData]);

  return { data: testData, isLoading: !testData };
};

export const useUser = () => useTestData(getUser());

export const useCustomer = (id: string) =>
  useTestData(getCustomer(id));

export const useExchanges = (customerId: string) =>
  useTestData(getExchanges(customerId));

export const useExchange = (id: string) =>
  useTestData(getExchange(id));
