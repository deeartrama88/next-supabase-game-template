import { createModel } from '@rematch/core';
import type { RootModel } from './index';
import { Mission } from '@/types/game/mission';

export interface MissionsState {
  missions: Mission[];
}

export const missions = createModel<RootModel>()({
  state: {
    missions: [],
  } as MissionsState,
  reducers: {
    setMissions(state, payload: Mission[]) {
      return {
        ...state,
        missions: payload,
      };
    },
    updateMission(state, payload: Mission) {
      return {
        ...state,
        missions: state.missions.map((mission) => (mission.id === payload.id ? payload : mission)),
      };
    },
  },
});
