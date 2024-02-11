/* eslint-disable react/prop-types */
import { currencyFormatter } from '../../helper';

export default function CartTotal({ cartData, couponData }) {
  const { isCouponApplied, couponValue, calMethod } = couponData?.[0] || [];

  let totalCartPrice = cartData
    ?.map((item) => item.totalPrice)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  let discountPrice;

  if (isCouponApplied) {
    discountPrice =
      calMethod === 'percentage'
        ? Math.ceil((totalCartPrice * couponValue) / 100)
        : couponValue;
    totalCartPrice = totalCartPrice - discountPrice;
  } else {
    totalCartPrice = cartData
      ?.map((item) => item.totalPrice)
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);
  }

  return (
    <div className=' flex flex-col gap-2 bg-LightGrey/60 p-4 rounded-md  '>
      {isCouponApplied && (
        <div>
          <p className=' text-sm text-Grey flex justify-between items-center'>
            Coupon discounts:
            <span className=' font-semibold text-Green'>{`-${discountPrice}`}</span>
          </p>
        </div>
      )}

      <div className=' flex justify-between items-center'>
        <span className='  text-sm font-semibold text-MediumGrey'>
          Total Amount:
        </span>
        <div className=' flex gap-1'>
          <span className=' text-1xs font-semibold text-Orange'>₹</span>
          <span className=' text-2xl text-Black font-bold'>
            {currencyFormatter(totalCartPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}
