import { Box } from '@mui/material';
import { createClient } from '@/utils/supabase/server';
import MissionCard from '@/components/game/missions/MissionCard';

export default async function MissionsPage() {
  const supabase = await createClient();
  const { data: missions } = await supabase.from('missions').select('*');

  return (
    <Box p={1}>
      <h1>Missions</h1>
      {missions?.map((mission) => <MissionCard key={mission.id} mission={mission} />)}
    </Box>
  );
}
