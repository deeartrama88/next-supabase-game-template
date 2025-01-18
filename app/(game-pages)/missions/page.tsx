import { Box, Stack } from '@mui/material';
import { createClient } from '@/utils/supabase/server';

import MissionCard from '@/components/game/missions/missionCard/MissionCard';
import SelectHeroModal from '@/components/game/missions/missionModals/SelectHeroModal';

export default async function MissionsPage() {
  const supabase = await createClient();
  const { data: heroes } = await supabase.from('heroes').select('*');
  const { data: missions } = await supabase.from('missions').select('*');

  console.log(heroes);

  return (
    <Box p={1}>
      <Stack direction="column" spacing={3}>
        {missions?.map((mission) => <MissionCard key={mission.id} mission={mission} />)}
      </Stack>
      <SelectHeroModal heroes={heroes || []} missions={missions || []} />
      {/*  select boosts modal  */}
    </Box>
  );
}
