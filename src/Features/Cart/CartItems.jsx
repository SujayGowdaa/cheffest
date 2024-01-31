/* eslint-disable react/prop-types */
import { FaLongArrowAltRight, FaTrash } from "react-icons/fa";

import Button from "../../UI/Button";
import NoData from "../../UI/NoData";
import CartTotal from "./CartTotal";

import { currencyFormatter } from "../../helper";
import SmallLoader from "../../UI/SmallLoader";

export default function CartItems({
  isLoadingCart,
  cartData,
  handleCheckOut,
  handleClearCart,
  handleIncrease,
  handleDecrease,
}) {
  if (isLoadingCart) return <SmallLoader />;
  if (cartData?.length < 1) return <NoData />;
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
                <span className=" text-sm font-bold capitalize w-[160px]">
                  {item.name}
                </span>
                <div className=" flex justify-start items-start text-Grey gap-[2px]">
                  <span className=" text-[9px]">₹</span>
                  <span className=" font-medium text-xs ">{item.price}</span>
                </div>
              </div>
              <div className=" flex h-6 items-center border text-Orange border-Yellow rounded-[4px] bg-LighYellow">
                <button
                  className=" p-1  disabled:cursor-not-allowed"
                  onClick={() => handleDecrease(item)}
                  disabled={isLoadingCart}
                >
                  {"-"}
                </button>
                <span className="flex items-center text-sm h-full p-1 mt-[1px]">
                  {item.quantity}
                </span>
                <button
                  className=" p-1 disabled:cursor-not-allowed"
                  onClick={() => handleIncrease(item)}
                  disabled={isLoadingCart}
                >
                  {"+"}
                </button>
              </div>
              <div className=" flex text-Grey gap-[2px] w-[120px]  justify-end">
                <span className=" text-xs mt-1 text-Orange">₹</span>
                <span className=" text-xl text-DarkGrey font-bold ">
                  {currencyFormatter(item.totalPrice)}
                </span>
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
        <Button
          type="clear"
          onClick={(e) => {
            handleClearCart();
            e.stopPropagation();
          }}
        >
          Clear
          <FaTrash className=" text-sm" />
        </Button>
      </div>
    </>
  );
}
