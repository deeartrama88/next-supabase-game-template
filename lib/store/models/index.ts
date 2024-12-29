import { Models } from '@rematch/core';
import { counter } from './counter';
import { user } from './user';

export interface RootModel extends Models<RootModel> {
  counter: typeof counter;
  user: typeof user;
}

export const models: RootModel = {
    counter,
    user,
}; 