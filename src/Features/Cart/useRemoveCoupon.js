import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeCoupon as removeCouponApi } from '../../services/apiMeals';
import { toast } from 'sonner';
import { useAppContext } from '../../store/AppContext';

export function useRemoveCoupon() {
  const { setIsCouponApplicable } = useAppContext();
  const queryClient = useQueryClient();
  const { mutate: removeCoupon, isPending } = useMutation({
    mutationFn: removeCouponApi,
    onSuccess: () => {
      setIsCouponApplicable({
        minBillValue: undefined,
        isCouponApplicable: false,
      });
      queryClient.invalidateQueries('coupon');
      toast.success('Coupon removed');
    },
    onError: (err) => toast.error(err.message),
  });

  return { removeCoupon, isPending };
}
