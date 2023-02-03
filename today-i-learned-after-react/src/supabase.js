import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qsnidtsrryfmdmfqtiqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmlkdHNycnlmbWRtZnF0aXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyNTE2MTEsImV4cCI6MTk5MDgyNzYxMX0.h0WHJ2NH3av90hw_sZ2cKl3K3-vZHD677Ozi2V6qDxg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
