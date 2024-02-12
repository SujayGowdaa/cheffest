/* eslint-disable react/prop-types */

import { useAppContext } from '../../store/AppContext';
import { useCouponRemover } from '../../Utils/useCouponRemover';

export default function QuantityButton({ item }) {
  const { handleDecrease, handleIncrease, isCartLoading } = useAppContext();
  useCouponRemover();

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
