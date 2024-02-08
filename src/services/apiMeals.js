import { supabase } from './superbase';

export async function getMeals({
  filterRatingObj,
  filterTypeObj,
  filterSortByObj,
  filterRangeObj,
  getDetailsId,
}) {
  const query = supabase.from('mealItems').select('*');

  if (filterRangeObj !== null)
    query.lte(filterRangeObj.field, filterRangeObj.value);

  if (filterRatingObj !== null)
    query.gte(filterRatingObj.field, filterRatingObj.value);

  if (filterTypeObj !== null)
    query.eq(
      filterTypeObj.field,
      filterTypeObj.value === 'nonVeg' ? 'non-veg' : filterTypeObj.value
    );

  if (filterSortByObj !== null)
    query.order('price', {
      ascending: filterSortByObj.value === 'price-asc' ? true : false,
    });

  if (getDetailsId !== null) query.eq('id', getDetailsId);

  const { data, error } = await query;

  if (error) throw new Error(error.message);
  return data;
}

export async function getMealsRaw() {
  const query = supabase.from('mealItems').select('*');
  const { data, error } = await query;

  if (error) throw new Error(error.message);
  return data;
}

export async function getCart() {
  const query = supabase.from('cart').select('*');
  const { data, error } = await query;

  if (error) throw new Error(error.message);
  return data;
}

export async function addItem(newItem) {
  const { data, error } = await supabase
    .from('cart')
    .insert([newItem])
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function removeItem(id) {
  const { data, error } = await supabase
    .from('cart')
    .delete()
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function increaseItem(item) {
  const { data, error: updateError } = await supabase
    .from('cart')
    .update({
      quantity: item.quantity + 1,
      totalPrice: item.totalPrice + item.price,
    })
    .eq('id', item.id);

  if (updateError) throw new Error(updateError.message);

  return data;
}

export async function decreaseItem(item) {
  const query = supabase.from('cart');

  const isQuantityOne = item.quantity === 1;

  if (isQuantityOne) {
    const { data, error: itemRemoveError } = await query
      .delete()
      .eq('id', item.id);

    if (itemRemoveError) throw new Error(itemRemoveError.message);
    return data;
  }
  const { data, error: updateError } = await query
    .update({
      quantity: item.quantity - 1,
      totalPrice: item.totalPrice - item.price,
    })
    .eq('id', item.id);

  if (updateError) throw new Error(updateError.message);
  return data;
}

export async function deleteItem(id) {
  const { data, error } = await supabase.from('cart').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
