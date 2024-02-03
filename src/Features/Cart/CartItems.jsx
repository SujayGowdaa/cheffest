/* eslint-disable react/prop-types */
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineRemoveCircle } from "react-icons/md";

import Button from "../../UI/Button";
import CartTotal from "./CartTotal";

import { currencyFormatter } from "../../helper";
import QuantityButton from "./QuantityButton";

export default function CartItems({ cartData, handleCheckOut, handleDelete }) {
  return (
    <>
      <div
        className="  cursor-default flex gap-6 flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {cartData?.map((item) => {
          return (
            <div
              key={item.id}
              className=" flex gap-12 items-center justify-between border p-4 rounded-md border-LightGrey"
            >
              <div className=" flex flex-col gap-1">
                <span className=" text-sm font-bold capitalize w-[140px]">
                  {item.name}
                </span>
                <div className=" flex justify-start items-start text-Grey gap-[2px]">
                  <span className=" text-[9px]">₹</span>
                  <span className=" font-medium text-xs ">{item.price}</span>
                </div>
              </div>
              <QuantityButton item={item} />
              <div className=" flex items-center gap-4">
                <div className=" flex text-Grey gap-[2px] w-[80px]  justify-end">
                  <span className=" text-xs mt-1 text-Orange">₹</span>
                  <span className=" text-xl text-DarkGrey font-bold ">
                    {currencyFormatter(item.totalPrice)}
                  </span>
                </div>
                <MdOutlineRemoveCircle
                  className=" text-xl text-Orange cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <CartTotal cartData={cartData} />
      <div className=" flex justify-center flex-col gap-6">
        <Button
          type="checkout"
          onClick={(e) => {
            handleCheckOut();
            e.stopPropagation();
          }}
        >
          Checkout
          <FaLongArrowAltRight />
        </Button>
      </div>
    </>
  );
}
