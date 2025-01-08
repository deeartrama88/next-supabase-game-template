import { Box, Stack } from '@mui/material';
import { createClient } from '@/utils/supabase/server';

import MissionCard from '@/components/game/missions/missionCard/MissionCard';

export default async function MissionsPage() {
  const supabase = await createClient();
  const { data: missions } = await supabase.from('missions').select('*');

  return (
    <Box p={1}>
      <h1>Missions</h1>
      <Stack direction="column" spacing={3}>
        {missions?.map((mission) => <MissionCard key={mission.id} mission={mission} />)}
      </Stack>
      {/*  select hero modal  */}
      {/*  select boosts modal  */}
    </Box>
  );
}
