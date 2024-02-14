/* eslint-disable react/prop-types */
import { FaLongArrowAltRight, FaTrash } from 'react-icons/fa';
import { MdOutlineRemoveCircle } from 'react-icons/md';

import Button from '../../UI/Button';
import CartTotal from './CartTotal';
import QuantityButton from './QuantityButton';
import ApplyCoupon from './ApplyCoupon';
import CouponDiscount from './CouponDiscount';

import { currencyFormatter } from '../../helper';
import { useAppContext } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';
import { useCoupon } from './useCoupon';
import { useEmptyCart } from '../Order/useEmptyCart';

export default function CartItems({ cartData }) {
  const {
    handleCheckOut,
    handleDelete,
    setIsCartOpen,
    isCouponApplicable,
    setCartDetails,
  } = useAppContext();
  const { data: couponData, isLoading } = useCoupon();
  const navigate = useNavigate();
  const { isCouponApplicable: isApplicable, minBillValue } = isCouponApplicable;
  const { isCouponApplied, couponValue, calMethod } = couponData?.[0] || [];
  const { emptyCart } = useEmptyCart();

  let totalCartPrice = cartData
    ?.map((item) => item.totalPrice)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  let discountPrice = 0;
  let updatedCartPrice = 0;

  if (isCouponApplied) {
    discountPrice =
      calMethod === 'percentage'
        ? Math.ceil((totalCartPrice * couponValue) / 100)
        : couponValue;
    updatedCartPrice = totalCartPrice - discountPrice;
  } else {
    totalCartPrice = cartData
      ?.map((item) => item.totalPrice)
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);
  }

  let cartDetails = {
    cartItems: cartData?.map((meal) => meal),
  };

  cartDetails = {
    ...cartDetails,
    discountPrice,
    totalCartPrice,
    updatedCartPrice,
    isCouponApplied,
  };

  function handleClickCheckOut(e) {
    e.stopPropagation();
    handleCheckOut();
    navigate('/order');
    setIsCartOpen(false);
    setCartDetails(cartDetails);
  }

  function handleClickRemoveCart(e) {
    e.stopPropagation();
    emptyCart();
  }

  return (
    <>
      <div
        className='  cursor-default flex gap-4 flex-col w-full'
        onClick={(e) => e.stopPropagation()}
      >
        {cartData?.map((item) => {
          return (
            <div
              key={item.id}
              className=' flex gap-4 items-center justify-between border p-2 rounded-md border-Grey/30'
            >
              <div className=' flex flex-col gap-1'>
                <span className=' text-xs font-bold capitalize w-[100px]'>
                  {item.name}
                </span>
                <div className=' flex justify-start items-start text-Grey gap-[2px]'>
                  <span className=' text-[9px]'>₹</span>
                  <span className=' font-medium text-xs '>{item.price}</span>
                </div>
              </div>
              <QuantityButton item={item} />
              <div className=' flex items-center gap-1'>
                <div className=' flex text-Grey gap-[2px] w-[60px]  justify-end'>
                  <span className=' text-xs mt-1 text-Orange'>₹</span>
                  <span className=' text-DarkGrey font-bold '>
                    {currencyFormatter(item.totalPrice)}
                  </span>
                </div>
                <MdOutlineRemoveCircle
                  className=' text-Orange cursor-pointer'
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className=' flex flex-col gap-4 w-full'>
        {couponData?.[0]?.isCouponApplied !== true && <ApplyCoupon />}
        {couponData?.[0]?.isCouponApplied && <CouponDiscount />}

        {!isApplicable && minBillValue !== undefined && (
          <p className=' text-xs text-Red'>{`Coupon only applicable for cart value above ₹${minBillValue}`}</p>
        )}
      </div>
      <CartTotal
        isCouponApplied={isCouponApplied}
        discountPrice={discountPrice}
        totalCartPrice={totalCartPrice}
        updatedCartPrice={updatedCartPrice}
      />
      <div className=' flex justify-center flex-col gap-4 w-full'>
        <Button
          type='checkout'
          onClick={(e) => handleClickCheckOut(e)}
          disabled={isLoading}
        >
          Checkout
          <FaLongArrowAltRight />
        </Button>
        <Button
          type='clear'
          onClick={(e) => handleClickRemoveCart(e)}
          disabled={isLoading}
        >
          Clear
          <FaTrash className=' text-xs mb-1' />
        </Button>
      </div>
    </>
  );
}
