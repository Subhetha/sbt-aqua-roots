import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://letqwamjhdvjspekthyb.supabase.co";

const supabaseKey = "sb_publishable_1St7gz447XDIpeNCNMNT7A_GwlAj-fz";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;