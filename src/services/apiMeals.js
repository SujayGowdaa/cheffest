import { supabase } from './superbase';

export async function getMeals() {
  const { data, error } = await supabase.from('items').select('*');
  if (error) throw new Error(error.message);
  return data;
}
