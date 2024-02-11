import { BiSolidOffer } from 'react-icons/bi';
import Coupon from './Coupon';
import { useAppContext } from '../../store/AppContext';

export default function ApplyCoupon() {
  const { isCoupon, setCoupon } = useAppContext();

  function handleApplyCoupon(e) {
    e.stopPropagation();
    setCoupon(!isCoupon);
  }

  return (
    <div className=' flex flex-col gap-6'>
      <button
        className=' flex items-center gap-1 p-2 rounded-md font-medium justify-center  outline-dashed outline-1  outline-Grey text-sm uppercase text-DarkGrey hover:shadow-md'
        onClick={(e) => handleApplyCoupon(e)}
      >
        <BiSolidOffer />
        {isCoupon ? 'Hide Coupons' : 'Show Coupons'}
      </button>

      {isCoupon && <Coupon setCoupon={setCoupon} />}
    </div>
  );
}
