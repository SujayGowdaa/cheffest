/* eslint-disable react/prop-types */
import CouponCard from './CouponCard';

export default function Coupon() {
  return (
    <div className='  bg-white'>
      <div className=' flex flex-col outline outline-1 outline-Grey/50 rounded-md h-[200px] overflow-scroll'>
        <CouponCard
          title={'Get flat ₹50 OFF'}
          body={'Flat ₹50 discount on orders above ₹600'}
          calMethod={'minus'}
          couponValue={50}
          minBillValue={600}
        />
        <CouponCard
          title={'Get 15%OFF'}
          body={'Flat 15% discount on bill value above ₹1200'}
          calMethod={'percentage'}
          couponValue={15}
          minBillValue={'1200'}
        />
        <CouponCard
          title={'Get flat ₹100 OFF'}
          body={'Flat ₹100 discount on orders above ₹1999'}
          calMethod={'minus'}
          couponValue={299}
          minBillValue={1999}
        />
        <CouponCard
          title={'Get 10% OFF'}
          body={'Flat 10% discount on orders above ₹400'}
          calMethod={'percentage'}
          couponValue={8}
          minBillValue={400}
        />
        <CouponCard
          title={'Get 30% OFF'}
          body={'Flat 30% discount on orders above ₹4000'}
          calMethod={'percentage'}
          couponValue={30}
          minBillValue={4000}
        />
      </div>
    </div>
  );
}
