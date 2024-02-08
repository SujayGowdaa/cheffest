import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addItem as addItemApi } from '../../services/apiMeals';
import { toast } from 'sonner';

export function useAddToCart() {
  const queryClient = useQueryClient();

  const { mutate: addItem, isPending } = useMutation({
    mutationFn: (newItem) => addItemApi(newItem),
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
      toast.success('Added to cart');
    },
    onError: () =>
      toast.error('Error adding to cart', {
        unstyled: true,
        classNames: {
          toast: 'bg-blue-400',
          title: 'text-red-400 text-2xl',
          description: 'text-red-400',
          actionButton: 'bg-zinc-400',
          cancelButton: 'bg-orange-400',
          closeButton: 'bg-lime-400',
        },
      }),
  });

  return { addItem, isPending };
}
