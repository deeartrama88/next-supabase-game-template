import { Hero } from './heroes';
import { Reward } from './reward';
import { Boost } from './boosts';
export type MissionStatus = 'active' | 'completed' | 'failed';

export type Mission = {
  id: string;
  heroes: Hero[];
  health: number;
  boosts: Boost[];
  status: MissionStatus;
  rewards: Reward[];
  image_url: string;
  created_at: string;
  description: string;
};
