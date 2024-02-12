import { useMutation, useQueryClient } from '@tanstack/react-query';
import { emptyCart as emptyCartApi } from '../../services/apiMeals';
import { useRemoveCoupon } from '../Cart/useRemoveCoupon';
import { useCoupon } from '../Cart/useCoupon';

export function useEmptyCart() {
  const queryClient = useQueryClient();
  const { data } = useCoupon();
  const { removeCoupon } = useRemoveCoupon();
  const { mutate: emptyCart, isPending } = useMutation({
    mutationFn: emptyCartApi,
    mutationKey: ['cart'],
    onSuccess: () => {
      queryClient.invalidateQueries(['cart', 'coupon']);
      if (data.isCouponApplied) removeCoupon();
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { emptyCart, isPending };
}
