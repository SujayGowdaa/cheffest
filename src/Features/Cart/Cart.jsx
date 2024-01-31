import { useAppContext } from "../../store/AppContext";
import { useCart } from "../Meals/useCart";
import { useIncreaseCount } from "./useIncreaseCount";

import { useDecreaseCount } from "./useDecreaseCount";
import { useClearCart } from "./useClearCart";
import CartItems from "./CartItems";
import SmallLoader from "../../UI/SmallLoader";

export default function Cart() {
  const { isCartOpen, setIsCartOpen } = useAppContext();
  const { data: cartData, isPending: isLoadingCart } = useCart();
  const { clearCart, isPending: isDeleting } = useClearCart();
  const { increaseItem, isPending: isIncreasing } = useIncreaseCount();
  const { decreaseItem, isPending: isDecreasing } = useDecreaseCount();

  const isLoading = isLoadingCart || isDeleting || isIncreasing || isDecreasing;

  function handleCheckOut() {}
  function handleClearCart() {
    clearCart();
  }

  function handleIncrease(item) {
    increaseItem(item);
  }

  function handleDecrease(item) {
    decreaseItem(item);
  }

  function handleCloseCart() {
    setIsCartOpen(false);
  }

  // Sorting the array of objects based on the 'name' property
  cartData?.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div
      className={`${isCartOpen ? "open" : "close"} inline-block z-30 p-20 bg-White right-0 cursor-pointer text-DarkGrey shadow-xl`}
      onClick={(e) => handleCloseCart(e)}
    >
      <div className=" cursor-default flex text-3xl mb-8 gap-6 justify-between">
        <h2 className=" text-2xl font-bold capitalize ">My orders</h2>
        {isLoading && <SmallLoader />}
      </div>
      <div className=" flex flex-col gap-12">
        <CartItems
          isLoadingCart={isLoadingCart}
          cartData={cartData}
          handleCheckOut={handleCheckOut}
          handleClearCart={handleClearCart}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      </div>
    </div>
  );
}
