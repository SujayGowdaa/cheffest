/* eslint-disable react/prop-types */
import { useAppContext } from "../../store/AppContext";

export default function QuantityButton({ item }) {
  const { handleDecrease, handleIncrease, isCartLoading } = useAppContext();

  return (
    <div className=" flex h-6 items-center border text-Orange border-Yellow rounded-[4px] bg-LightYellow">
      <button
        className=" p-1  disabled:cursor-not-allowed"
        onClick={() => handleDecrease(item)}
        disabled={isCartLoading}
      >
        {"-"}
      </button>
      <span className="flex items-center text-sm h-full p-1 mt-[1px]">
        {item?.quantity}
      </span>
      <button
        className=" p-1 disabled:cursor-not-allowed"
        onClick={() => handleIncrease(item)}
        disabled={isCartLoading}
      >
        {"+"}
      </button>
    </div>
  );
}
