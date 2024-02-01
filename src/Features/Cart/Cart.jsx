import { useAppContext } from "../../store/AppContext";
import { useCart } from "./useCart";
import { useIncreaseCount } from "./useIncreaseCount";
import { useDecreaseCount } from "./useDecreaseCount";
import { useDeleteItem } from "./useClearCart";

import CartItems from "./CartItems";
import SmallLoader from "../../UI/SmallLoader";
import { useNavigate } from "react-router-dom";
import NoData from "../../UI/NoData";

export default function Cart() {
  const { isCartOpen, setIsCartOpen } = useAppContext();
  const { data: cartData, isPending: isLoadingCart } = useCart();
  const { increaseItem, isPending: isIncreasing } = useIncreaseCount();
  const { decreaseItem, isPending: isDecreasing } = useDecreaseCount();
  const { deleteItem, isPending: isDeleting } = useDeleteItem();
  const navigate = useNavigate();

  const isLoading = isLoadingCart || isIncreasing || isDecreasing || isDeleting;

  function handleCheckOut() {
    navigate("/checkout");
  }
  function handleDelete(id) {
    deleteItem(id);
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
    <>
      <div
        className={`${isCartOpen ? "open" : "close"} inline-block p-20 bg-White right-0 cursor-pointer text-DarkGrey shadow-xl h-screen pointer-events-auto`}
        onClick={(e) => handleCloseCart(e)}
      >
        <div className=" cursor-default flex text-3xl mb-8 gap-6 justify-between">
          <h2 className=" text-2xl font-bold capitalize ">My orders</h2>
          {isLoading && <SmallLoader />}
        </div>
        <div className=" flex flex-col gap-12">
          {cartData?.length < 1 ? (
            <NoData />
          ) : (
            <CartItems
              isLoadingCart={isLoadingCart}
              cartData={cartData}
              handleCheckOut={handleCheckOut}
              handleDelete={handleDelete}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
          )}
        </div>
      </div>
      {isCartOpen && (
        <div
          className=" pointer-events-auto cursor-pointer h-screen bg-black/20 backdrop-blur-[2px] transition duration-300"
          onClick={handleCloseCart}
        ></div>
      )}
    </>
  );
}
