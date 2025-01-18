import { createContext, useContext, ReactNode } from 'react';
import { Mission } from '@/types/game/mission';

interface MissionCardContextType {
  mission: Mission;
}

const MissionCardContext = createContext<MissionCardContextType | undefined>(undefined);

export function useMissionCard() {
  const context = useContext(MissionCardContext);
  if (!context) {
    throw new Error('useMissionCard must be used within a MissionCardProvider');
  }
  return context;
}

interface MissionCardProviderProps {
  mission: Mission;
  children: ReactNode;
}

export function MissionCardProvider({ mission, children }: MissionCardProviderProps) {
  return <MissionCardContext.Provider value={{ mission }}>{children}</MissionCardContext.Provider>;
}
