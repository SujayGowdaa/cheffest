import { useMutation, useQueryClient } from '@tanstack/react-query';
import { applyCoupon as applyCouponApi } from '../../services/apiMeals';
import { toast } from 'sonner';
import { useAppContext } from '../../store/AppContext';

export function useApplyCoupon() {
  const { setCoupon, setIsCouponApplicable } = useAppContext();

  const queryClient = useQueryClient();
  const { mutate: applyCoupon, isPending } = useMutation({
    mutationFn: (coupon) => applyCouponApi(coupon),
    mutationKey: ['coupon'],
    onSuccess: () => {
      setCoupon(false);
      setIsCouponApplicable({
        minBillValue: undefined,
        isCouponApplicable: true,
      });
      queryClient.invalidateQueries(['cart', 'coupon']);
      toast.success('Coupon applied');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { applyCoupon, isPending };
}
