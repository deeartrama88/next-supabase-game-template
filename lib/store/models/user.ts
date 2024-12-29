import { createModel } from '@rematch/core';
import type { RootModel } from './index';
import { UserDetails, UserState } from '../types/user';

export const user = createModel<RootModel>()({
  state: {
        details: null,
  } as UserState,
  reducers: {
    updateUser(state, payload: UserDetails) {
      return {
        ...state,
        details: payload,
      };
    },
  },
}); 