import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://cblfqmsyjlgmogajxqry.supabase.co';
const supabaseKey = 'sb_publishable_aR7A6PIAURxYW06omAe9gA_oUYPQ5BN';

export const supabase = createClient(supabaseUrl, supabaseKey);