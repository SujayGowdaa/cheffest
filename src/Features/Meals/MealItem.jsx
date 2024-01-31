import { LiaRupeeSignSolid } from "react-icons/lia";

import ButtonCart from "../../UI/ButtonCart";
import Rating from "../../UI/Rating";
import useMeals from "./useMeals";
import LoadingScreen from "../../UI/LoadingScreen";

import { currencyFormatter } from "../../helper";
import { useAddToCart } from "./useAddToCart";
import { useCart } from "./useCart";
import { useRemoveFromCart } from "./useRemoveFromCart";

export default function MealItem() {
  const { isLoading: isLoadingMeals, mealItems = [] } = useMeals();
  const { addItem, isPending: isAdding } = useAddToCart();
  const { removeItem, isPending: isRemoving } = useRemoveFromCart();
  const { data: cartData, isPending: isFetching } = useCart();

  const isLoading = isAdding || isRemoving || isFetching;

  function handleClick(clickedItem) {
    if (!cartData?.map((item) => item.id).includes(clickedItem.id)) {
      const { id, name, price, ingredients, quantity = 1 } = clickedItem;
      const newItem = {
        id,
        name,
        quantity,
        price: Math.ceil(price),
        ingredients,
        totalPrice: Math.ceil(price),
      };
      addItem(newItem);
    }
    removeItem(clickedItem.id);
  }

  if (isLoadingMeals) return <LoadingScreen />;

  return (
    <>
      {mealItems?.map((item) => {
        return (
          <div
            key={item.name}
            className="  relative flex w-[220px] cursor-pointer flex-col rounded-xl border-[10px] border-White shadow-xl outline outline-2 outline-LightGrey transition duration-300 hover:scale-105 hover:shadow-2xl "
          >
            <div className=" h-[135px] w-auto overflow-hidden rounded-xl">
              <div
                className={`absolute left-[-9px] top-4 ml-[-2px] rounded-r-md  bg-white p-1 px-4 pt-[5px] text-[11px] font-bold uppercase tracking-wide shadow-md ${item.type === "veg" ? "text-Green" : "text-Red"} `}
              >
                {item.type}
              </div>
              <img src={item.image} className=" h-auto w-full" />
            </div>

            <div className=" flex flex-auto flex-grow flex-col gap-2 p-2 ">
              <p className=" text-sm font-semibold text-DarkGrey ">
                {item.name}
              </p>
              <div className=" flex gap-1">
                <Rating rating={Math.floor(item.rating)} />
                <p className=" text-xs">{Math.floor(item.rating)}</p>
              </div>
              <div className=" mb-auto flex items-center text-xl ">
                <LiaRupeeSignSolid className=" mr-1 mt-[-4px]  stroke-[0.8]   text-Yellow" />
                <p className=" text-3xl font-bold tracking-tight text-DarkGrey ">
                  {currencyFormatter(Math.ceil(item.price))}
                </p>
              </div>
              <ButtonCart
                disabled={isLoading}
                isInCart={cartData?.map((item) => item.id).includes(item.id)}
                id={item.id}
                className="items-end "
                onClick={() => handleClick(item)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
