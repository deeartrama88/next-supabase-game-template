import { Hero } from './heroes';
import { Reward } from './reward';

export type MissionStatus = 'active' | 'completed' | 'failed';

export type Mission = {
  id: string;
  heroes: Hero[];
  health: number;
  status: MissionStatus;
  rewards: Reward[];
  image_url: string;
  created_at: string;
  description: string;
};
