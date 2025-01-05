export type HeroStatus = 'on_mission' | 'ready' | 'dead';

export type Hero = {
  id: string;
  name: string;
  health: number;
  attack: number;
  status: HeroStatus;
  defense: number;
  accuracy: number;
  avatar_url: string;
  crit_chance: number;
  description: string;
};
