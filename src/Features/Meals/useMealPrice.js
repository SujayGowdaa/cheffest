import { useQuery } from '@tanstack/react-query';
import { getMealsRaw } from '../../services/apiMeals';

export function useMealPrice() {
  const { data: mealItems, isLoading } = useQuery({
    queryKey: ['mealItems'],
    queryFn: getMealsRaw,
  });

  let mealPriceList = [];
  mealItems?.map((i) => mealPriceList.push(Math.ceil(Number(i.price))));

  return { mealPriceList, isLoading };
}
