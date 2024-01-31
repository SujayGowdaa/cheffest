/* eslint-disable react/prop-types */
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

export default function ButtonCart({ onClick, isInCart, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick()}
      className={`disabled:cursor-not-allowed flex w-full items-center justify-center gap-2 rounded-md border-2  p-1 text-White shadow-md  transition duration-100 active:scale-100 ${isInCart ? "border-DarkRed bg-Red" : "border-DarkGreen bg-Green"}`}
    >
      <span className=" font-semibold ">
        {isInCart ? "Remove" : "Add to cart"}
      </span>

      {isInCart ? <IoIosRemoveCircle /> : <IoIosAddCircle />}
    </button>
  );
}
