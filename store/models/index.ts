import { Models } from '@rematch/core';
import { counter } from './counter';
import { user } from './user';
import { missions } from './missions';
export interface RootModel extends Models<RootModel> {
  user: typeof user;
  counter: typeof counter;
  missions: typeof missions;
}

export const models: RootModel = {
  user,
  counter,
  missions,
};
