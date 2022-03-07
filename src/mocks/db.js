import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  user: {
    id: primaryKey(() => '1'),
    name: () => 'John Doe',
    login: () => 'john@doe.com',
    password: () => '1234',
  },
});
