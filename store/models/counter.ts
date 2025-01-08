import { createModel } from '@rematch/core';
import type { RootModel } from './index';

export interface CounterState {
  value: number;
}

export const counter = createModel<RootModel>()({
  state: {
    value: 0,
  } as CounterState,
  reducers: {
    increment(state) {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    decrement(state) {
      return {
        ...state,
        value: state.value - 1,
      };
    },
    incrementBy(state, payload: number) {
      return {
        ...state,
        value: state.value + payload,
      };
    },
  },
  effects: (dispatch) => ({
    async incrementAsync() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.counter.increment();
    },
  }),
}); 