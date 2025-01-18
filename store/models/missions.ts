import { createModel } from '@rematch/core';
import type { RootModel } from './index';
import { Mission } from '@/types/game/mission';
import { Hero } from '@/types/game/heroes';

export interface MissionsState {
  missions: Mission[];
  selectHeroModal: {
    open: boolean;
    missionId: string | null;
  };
}

export const missions = createModel<RootModel>()({
  state: {
    missions: [],
    selectHeroModal: {
      open: false,
      missionId: null,
    },
  } as MissionsState,
  reducers: {
    setSelectHeroModal(state, payload: MissionsState['selectHeroModal']) {
      return {
        ...state,
        selectHeroModal: payload,
      };
    },
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
