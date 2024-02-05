/* eslint-disable react/prop-types */
import { currencyFormatter } from '../../helper';

export default function CartTotal({ cartData }) {
  const totalCartPrice = cartData
    ?.map((item) => item.totalPrice)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  return (
    <div className=' bg-LightGrey p-4 rounded-md flex justify-between items-center'>
      <span className=' text-sm font-semibold text-MediumGrey'>
        Total Amount
      </span>
      <div className=' flex gap-1'>
        <span className=' text-1xs  text-Orange'>₹</span>
        <span className=' text-2xl text-DarkGreen font-bold'>
          {currencyFormatter(totalCartPrice)}
        </span>
      </div>
    </div>
  );
}
