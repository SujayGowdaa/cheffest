/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { useCart } from "../Features/Cart/useCart";
import { useRemoveFromCart } from "../Features/Cart/useRemoveFromCart";
import { useAddToCart } from "../Features/Cart/useAddToCart";
import { useEffect, useState } from "react";

export default function ButtonCart({ item }) {
  const { addItem, isPending: isAdding } = useAddToCart();
  const { removeItem, isPending: isRemoving } = useRemoveFromCart();
  const { data: cartData } = useCart();

  let isInCart;

  isInCart = cartData?.map((item) => item.id).includes(item.id);

  function handleClick(item) {
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
      addItem(newItem);
    } else {
      removeItem(item.id);
    }
  }

  return (
    <button
      disabled={isAdding || isRemoving}
      onClick={() => handleClick(item)}
      className={`disabled:cursor-not-allowed flex w-full items-center justify-center gap-2 rounded-md border-2  p-1 text-White shadow-md  transition duration-100 active:scale-100 ${isInCart ? "border-DarkRed bg-Red" : "border-DarkGreen bg-Green"}`}
    >
      <span className=" font-semibold ">
        {isInCart ? "Remove" : "Add to cart"}
      </span>
      {isInCart ? <IoIosRemoveCircle /> : <IoIosAddCircle />}
    </button>
  );
}
