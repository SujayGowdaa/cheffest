import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteItem as deleteItemApi } from '../../services/apiMeals';
import { toast } from 'sonner';

export function useDeleteItem() {
  const queryClient = useQueryClient();

  const { mutate: deleteItem, isPending } = useMutation({
    mutationFn: (id) => deleteItemApi(id),
    mutationKey: ['cart'],
    onSuccess: () => {
      toast.success('Item removed from cart');
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
    onError: () => toast.error("Couldn't remove item from the cart"),
  });

  return { deleteItem, isPending };
}
