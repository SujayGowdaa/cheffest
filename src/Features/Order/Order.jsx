/* eslint-disable react/prop-types */
import { currencyFormatter } from '../../helper';

export default function Order({
  cartItems,
  isCouponApplied,
  totalCartPrice,
  discountPrice,
  updatedCartPrice,
  id,
}) {
  return (
    <div className=' flex flex-col gap-4 '>
      <h2 className=' text-Green text-xl font-bold uppercase text-center'>
        order details
      </h2>
      <p className=' uppercase text-sm font-medium text-Black'>
        Order ID:{' '}
        <span className=' font-bold text-Red uppercase'>
          #{id?.split('-')[0]}
        </span>
      </p>
      <div className=' flex flex-col gap-4 text-sm capitalize text-Grey '>
        {cartItems.map((item) => (
          <div key={item.id} className=' flex justify-between gap-12'>
            <div className=' flex flex-col '>
              <div className=' text-sm font-semibold text-DarkGrey space-x-2'>
                <span>{item.name}</span>
                <span className=' text-MediumGrey'>X {item.quantity}</span>
              </div>
              <span className=' text-xs font-light text-Grey italic max-w-[300px]'>
                {item.ingredients}
              </span>
            </div>

            {item.quantity > 1 ? (
              <div className=' flex gap-2 items-center'>
                <span className='  '>
                  {currencyFormatter(item.price)} X {item.quantity} =
                </span>
                <span className=' font-semibold text-MediumGrey'>
                  {currencyFormatter(item.totalPrice)}
                </span>
              </div>
            ) : (
              <div className=' flex flex-col gap-2'>
                <span className=' font-semibold text-MediumGrey'>
                  {currencyFormatter(item.price)}
                </span>
              </div>
            )}
          </div>
        ))}
        {isCouponApplied && (
          <div className=' flex flex-col gap-2'>
            <div className=' flex justify-between'>
              <p>Coupon Discount: </p>
              <div className=' flex gap-2'>
                <span>{currencyFormatter(totalCartPrice)}</span>
                {' - '}
                <span className=' text-Green font-semibold'>
                  {currencyFormatter(discountPrice)}
                </span>
              </div>
            </div>
            <div className=' flex justify-between items-center'>
              <p>Total Amount:</p>{' '}
              <span className=' font-bold text-Orange text-lg'>
                {currencyFormatter(updatedCartPrice)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
