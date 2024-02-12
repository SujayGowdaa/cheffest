import { supabase } from './superbase';

export async function newOrder(orderDetails) {
  const { data, error } = await supabase
    .from('orderDetails')
    .upsert([orderDetails])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function getOrder(orderId) {
  let { data, error } = await supabase
    .from('orderDetails')
    .select('*')
    .eq('orderId', orderId);

  if (error) throw new Error(error.message);
  return data;
}
