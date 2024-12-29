import ReduxCounter from '@/components/testComponents/ReduxCounter';
import { createClient } from '@/utils/supabase/server'


export default async function Page() {
  const supabase = await createClient()
  const { data: notes } = await supabase.from('notes').select()

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <h1 className="text-2xl font-medium">Notes (server component 3)</h1>
      </div>
      <div className="w-full">
        <pre>{JSON.stringify(notes, null, 2)}</pre>
      </div>
      <div>
        <ReduxCounter />
      </div>
    </div>
  );
}
