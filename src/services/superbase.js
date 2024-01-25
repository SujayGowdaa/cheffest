import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yyfjumfmwgnvczjziqao.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5Zmp1bWZtd2dudmN6anppcWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5ODQ2NjcsImV4cCI6MjAyMTU2MDY2N30.B3Tg8TaRUN14RvHDogu5FusuZah3ZnLR0xnk1AZEuPo';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabaseUrl, supabase };
