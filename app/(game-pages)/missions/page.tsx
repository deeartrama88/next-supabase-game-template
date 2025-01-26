import { Box } from '@mui/material';
import { createClient } from '@/utils/supabase/server';
import Missions from '@/components/game/missions/Missions';

export default async function MissionsPage() {
  const supabase = await createClient();
  const { data: heroes } = await supabase.from('heroes').select('*').order('name');
  const { data: missions } = await supabase.from('missions').select('*, heroes (*)');

  return (
    <Box p={1}>
      <Missions initialHeroes={heroes || []} initialMissions={missions || []} />
    </Box>
  );
}
