import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeCoupon as removeCouponApi } from '../../services/apiMeals';
import { toast } from 'sonner';

export function useRemoveCoupon() {
  const queryClient = useQueryClient();
  const { mutate: removeCoupon, isPending } = useMutation({
    mutationFn: removeCouponApi,
    onSuccess: () => {
      queryClient.invalidateQueries('coupon');
    },
    onError: (err) => toast.error(err.message),
  });

  return { removeCoupon, isPending };
}
