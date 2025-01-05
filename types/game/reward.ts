export type RewardType = 'gold' | 'experience' | 'item' | 'boost';

export type Reward = {
  id: string;
  type: RewardType;
  amount: number;
  description: string;
};
