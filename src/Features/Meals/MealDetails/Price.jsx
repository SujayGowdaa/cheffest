/* eslint-disable react/prop-types */
import { currencyFormatter } from "../../../helper";

export default function Price(price) {
  return (
    <div className=" flex gap-2">
      <span className=" text-2xl font-semibold  text-Orange">₹</span>
      <span className=" text-5xl font-bold text-DarkGrey">
        {currencyFormatter(Math.ceil(price.price))}
      </span>
    </div>
  );
}
