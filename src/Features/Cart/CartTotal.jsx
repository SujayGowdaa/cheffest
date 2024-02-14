/* eslint-disable react/prop-types */
import { currencyFormatter } from '../../helper';

export default function CartTotal({
  isCouponApplied,
  discountPrice,
  totalCartPrice,
  updatedCartPrice,
}) {
  return (
    <div className=' flex flex-col gap-2 bg-LightGrey/60 p-4 rounded-md w-full '>
      {isCouponApplied && (
        <div>
          <div className=' text-sm text-Grey flex justify-between items-center'>
            Coupon discounts:
            <div>
              <span className=' font-medium text-MediumGrey'>
                {totalCartPrice}{' '}
              </span>
              <span className=' font-medium text-Green'>
                {` - ${discountPrice}`}
              </span>
            </div>
          </div>
        </div>
      )}
      <div className=' flex justify-between items-center'>
        <span className='  text-xs font-semibold text-MediumGrey'>
          Total Amount:
        </span>

        <div className=' flex gap-1'>
          <span className=' font-semibold text-Orange'>₹</span>
          <span className=' text-xl text-Black font-bold'>
            {currencyFormatter(updatedCartPrice || totalCartPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}
