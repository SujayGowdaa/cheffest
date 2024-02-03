/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { useCart } from "../Features/Cart/useCart";
import { useAppContext } from "../store/AppContext";

export default function ButtonCart({ item }) {
  const { handleAddItem, removeItem, isCartLoading } = useAppContext();
  const { data: cartData } = useCart();

  let isInCart = cartData?.map((item) => item.id).includes(item.id);

  function handleClick(item, e) {
    e.stopPropagation();
    if (!isInCart) {
      const { id, name, price, ingredients, quantity = 1 } = item;
      const newItem = {
        id,
        name,
        quantity,
        price: Math.ceil(price),
        ingredients,
        totalPrice: Math.ceil(price),
      };
      handleAddItem(newItem);
    } else {
      removeItem(item.id);
    }
  }

  return (
    <button
      disabled={isCartLoading}
      onClick={(e) => handleClick(item, e)}
      className={`disabled:cursor-not-allowed flex w-full items-center justify-center gap-2 rounded-md border-2  py-2 px-6 text-White shadow-md  transition duration-100 active:scale-100 ${isInCart ? "border-DarkRed bg-Red" : "border-DarkGreen bg-Green"}`}
    >
      <span className=" font-medium ">
        {isInCart ? "Remove" : "Add to cart"}
      </span>
      {isInCart ? <IoIosRemoveCircle /> : <IoIosAddCircle />}
    </button>
  );
}
