'use server';

import { createClient } from '@/utils/supabase/server';

export const addHeroToMissionAction = async (missionId: string, heroId: string) => {
  const supabase = await createClient();
  const { error } = await supabase
    .from('heroes')
    .update({ active_mission_id: missionId })
    .eq('id', heroId)
    .select();

  if (error) {
    console.error(error.message);
  }
};

export const removeHeroFromMissionAction = async (missionId: string, heroId: string) => {
  const supabase = await createClient();
  const { error } = await supabase
    .from('heroes')
    .update({ active_mission_id: null })
    .eq('id', heroId)
    .select();

  if (error) {
    console.error(error.message);
  }
};
