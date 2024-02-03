/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useIncreaseCount } from "../Features/Cart/useIncreaseCount";
import { useDecreaseCount } from "../Features/Cart/useDecreaseCount";
import { useDeleteItem } from "../Features/Cart/useClearCart";
import { useRemoveFromCart } from "../Features/Cart/useRemoveFromCart";
import { useAddToCart } from "../Features/Cart/useAddToCart";

const Context = createContext();

export default function AppContext({ children }) {
  const { increaseItem, isPending: isIncreasing } = useIncreaseCount();
  const { decreaseItem, isPending: isDecreasing } = useDecreaseCount();
  const { deleteItem, isPending: isDeleting } = useDeleteItem();
  const { addItem, isPending: isAdding } = useAddToCart();
  const { removeItem, isPending: isRemoving } = useRemoveFromCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isCartLoading =
    isDecreasing || isIncreasing || isDeleting || isAdding || isRemoving;

  function handleIncrease(item) {
    increaseItem(item);
  }

  function handleDecrease(item) {
    decreaseItem(item);
  }

  function handleDelete(id) {
    deleteItem(id);
  }

  function handleAddItem(item) {
    addItem(item);
  }

  return (
    <Context.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        handleDecrease,
        handleIncrease,
        isCartLoading,
        handleDelete,
        handleAddItem,
        removeItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useAppContext() {
  const context = useContext(Context);
  if (!context)
    throw new Error("Please use context within the context provider.");
  return context;
}
