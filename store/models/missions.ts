import { createModel } from '@rematch/core';
import type { RootModel } from './index';
import { Mission } from '@/types/game/mission';

export interface MissionsState {
  missions: Mission[];
  selectHeroModal: {
    open: boolean;
    missionId: string | null;
    heroActionLoading?: boolean | string;
  };
}

export const missions = createModel<RootModel>()({
  state: {
    missions: [],
    selectHeroModal: {
      open: false,
      missionId: null,
      heroActionLoading: false,
    },
  } as MissionsState,
  reducers: {
    setSelectHeroModal(state, payload: MissionsState['selectHeroModal']) {
      return {
        ...state,
        selectHeroModal: { ...state.selectHeroModal, ...payload },
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
