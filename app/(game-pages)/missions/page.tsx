import { Box } from '@mui/material';
import { createClient } from '@/utils/supabase/server';

export default async function MissionsPage() {
  const supabase = await createClient();
  const { data: missions } = await supabase.from('missions').select('*');

  return (
    <Box p={1}>
      <h1>Missions</h1>
      <pre>{JSON.stringify(missions, null, 2)}</pre>
    </Box>
  );
}
