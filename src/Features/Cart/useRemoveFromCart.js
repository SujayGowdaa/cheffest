import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeItem as removeItemApi } from '../../services/apiMeals';
import { toast } from 'sonner';

export function useRemoveFromCart() {
  const queryClient = useQueryClient();

  const { mutate: removeItem, isPending } = useMutation({
    mutationFn: (id) => removeItemApi(id),
    onSettled: () => {
      queryClient.invalidateQueries('cart');
      toast.success('Removed from the cart');
    },
    onError: (err) => alert(err.message),
  });

  return { removeItem, isPending };
}
