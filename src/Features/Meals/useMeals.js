import { useQuery } from '@tanstack/react-query';
import { getMeals } from '../../services/apiMeals';

export default function useMeals() {
  const { data: mealItems, isLoading } = useQuery({
    queryKey: ['items'],
    queryFn: getMeals,
  });

  return { mealItems, isLoading };
}
