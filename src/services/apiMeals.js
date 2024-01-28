import { supabase } from "./superbase";

export async function getMeals({
  filterRatingObj,
  filterTypeObj,
  filterSortByObj,
  filterRangeObj,
}) {
  const query = supabase.from("mealItems").select("*");

  if (filterRangeObj !== null)
    query.lte(filterRangeObj.field, filterRangeObj.value);

  if (filterRatingObj !== null)
    query.gte(filterRatingObj.field, filterRatingObj.value);

  if (filterTypeObj !== null)
    query.eq(
      filterTypeObj.field,
      filterTypeObj.value === "nonVeg" ? "non-veg" : filterTypeObj.value,
    );

  if (filterSortByObj !== null)
    query.order("price", {
      ascending: filterSortByObj.value === "price-asc" ? true : false,
    });

  const { data, error } = await query;

  if (error) throw new Error(error.message);
  return data;
}

export async function getMealsRaw() {
  const query = supabase.from("mealItems").select("*");
  const { data, error } = await query;

  if (error) throw new Error(error.message);
  return data;
}
