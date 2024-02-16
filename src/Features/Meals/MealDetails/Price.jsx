/* eslint-disable react/prop-types */
import { currencyFormatter } from '../../../helper';

export default function Price(price) {
  return (
    <div className=' flex gap-2 justify-center sm:justify-normal'>
      <span className=' text-lg font-semibold  text-Orange md:text-xl'>₹</span>
      <span className=' text-2xl font-bold text-DarkGrey md:text-3xl'>
        {currencyFormatter(Math.ceil(price.price))}
      </span>
    </div>
  );
}
