import { useCoupon } from './useCoupon';
import { useRemoveCoupon } from './useRemoveCoupon';

export default function CouponDiscount() {
  const { data, isLoading } = useCoupon();
  const { removeCoupon, isPending } = useRemoveCoupon();
  const calMethod = data[0]?.calMethod === 'percentage' ? '%' : '';

  function handleClickRemove() {
    removeCoupon();
  }

  return (
    <div
      className=' flex justify-between gap-6 outline outline-1 outline-Grey/50 p-4 rounded-md'
      onClick={(e) => e.stopPropagation()}
    >
      <div className=' flex flex-col gap-1'>
        {data[0]?.calMethod === 'percentage' ? (
          <h3 className=' font-semibold text-Green text-[14px]'>{`${data[0]?.couponValue}${calMethod} OFF`}</h3>
        ) : (
          <h3 className=' font-semibold text-Green text-[14px]'>{`₹${data[0]?.couponValue} OFF`}</h3>
        )}
        <p className=' font-normal text-Grey text-[12px]'>
          Offer applied on the bill
        </p>
      </div>
      <button
        className=' text-xs font-semibold text-Orange hover:text-orange-500'
        disabled={isLoading || isPending}
        onClick={handleClickRemove}
      >
        Remove
      </button>
    </div>
  );
}
