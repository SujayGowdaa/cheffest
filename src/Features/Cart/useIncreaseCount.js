import { useMutation, useQueryClient } from '@tanstack/react-query';
import { increaseItem as increaseItemApi } from '../../services/apiMeals';

export function useIncreaseCount() {
  const queryClient = useQueryClient();

  const { mutate: increaseItem, isPending } = useMutation({
    mutationFn: (item) => increaseItemApi(item),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  return { increaseItem, isPending };
}
