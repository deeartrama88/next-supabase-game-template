'use client';

import { Box, Stack } from '@mui/material';
import { createClient } from '@/utils/supabase/client';
import { useState } from 'react';

import MissionCard from '@/components/game/missions/missionCard/MissionCard';
import SelectHeroModal from '@/components/game/missions/missionModals/SelectHeroModal';
import { Hero } from '@/types/game/heroes';
import { Mission } from '@/types/game/mission';
import { addHeroToMissionAction, removeHeroFromMissionAction } from '@/app/actions/missionActions';
import { useDispatch } from 'react-redux';

type Props = {
  initialHeroes: Hero[];
  initialMissions: Mission[];
};

export default function Missions({ initialHeroes, initialMissions }: Props) {
  const [missions, setMissions] = useState<Mission[]>(initialMissions);
  const [heroes, setHeroes] = useState<Hero[]>(initialHeroes);
  const dispatch = useDispatch();

  const supabase = createClient();

  const callback = async () => {
    const { data: heroes } = await supabase.from('heroes').select('*').order('name');
    const { data: missions } = await supabase.from('missions').select('*, heroes (*)');
    setHeroes(heroes || []);
    setMissions(missions || []);
  };

  const toggleHeroActionLoading = (loading: boolean | string) => {
    dispatch.missions.setSelectHeroModal({ heroActionLoading: loading });
  };

  const handleHeroModal = async (hero: Hero, missionId: string, action: string) => {
    switch (action) {
      case 'select':
        toggleHeroActionLoading(hero.id);
        await addHeroToMissionAction(missionId, hero.id);
        await callback();
        toggleHeroActionLoading(false);
        break;
      case 'deselect':
        toggleHeroActionLoading(hero.id);
        await removeHeroFromMissionAction(missionId, hero.id);
        await callback();
        toggleHeroActionLoading(false);
        break;
    }
  };

  return (
    <Box p={1}>
      <Stack direction="column" spacing={3}>
        {missions?.map((mission) => <MissionCard key={mission.id} mission={mission} />)}
      </Stack>
      <SelectHeroModal heroes={heroes} onClick={handleHeroModal} />
      {/*  select boosts modal  */}
    </Box>
  );
}
