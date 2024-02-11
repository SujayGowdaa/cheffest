/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useAppContext } from '../../store/AppContext';
import { useCart } from './useCart';
import { useCoupon } from './useCoupon';
import { useRemoveCoupon } from './useRemoveCoupon';

export default function QuantityButton({ item }) {
  const { handleDecrease, handleIncrease, isCartLoading } = useAppContext();
  const { removeCoupon } = useRemoveCoupon();
  const { data } = useCoupon();
  const { data: cartData } = useCart();
  const minBillValue = data?.[0].minBillValue;

  useEffect(() => {
    if (cartData) {
      const totalCartPrice = cartData
        ?.map((item) => item.totalPrice)
        .reduce((acc, cur) => {
          return acc + cur;
        }, 0);
      if (totalCartPrice < minBillValue || !totalCartPrice) {
        removeCoupon();
      }
    }
  }, [cartData, removeCoupon, minBillValue]);

  function handleClickDec(item) {
    handleDecrease(item);
  }

  function handleClickInc(item) {
    handleIncrease(item);
  }

  return (
    <div className=' flex h-6 items-center border text-Orange border-Yellow rounded-[4px] bg-LightYellow'>
      <button
        className=' p-1  disabled:cursor-not-allowed'
        onClick={() => handleClickDec(item)}
        disabled={isCartLoading}
      >
        {'-'}
      </button>
      <span className='flex items-center text-sm h-full p-1 mt-[1px]'>
        {item?.quantity}
      </span>
      <button
        className=' p-1 disabled:cursor-not-allowed'
        onClick={() => handleClickInc(item)}
        disabled={isCartLoading}
      >
        {'+'}
      </button>
    </div>
  );
}
