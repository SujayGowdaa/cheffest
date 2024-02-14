/* eslint-disable react/prop-types */
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { useAppContext } from '../../../store/AppContext';

export default function MealCount({ cartData, item }) {
  const {
    handleIncrease,
    handleDecrease,
    isCartLoading,
    handleDelete,
    handleAddItem,
  } = useAppContext();

  const mealToUpdate = cartData.find((meal) => meal.id === item.id);

  const {
    id,
    name,
    price,
    quantity = 0,
    ingredients,
    totalPrice,
  } = mealToUpdate || [];

  const updatedMeal = {
    id,
    name,
    price,
    quantity,
    ingredients,
    totalPrice,
  };

  function handleDecreaseCount() {
    if (quantity < 1) {
      handleDelete(item.id);
    } else {
      handleDecrease(updatedMeal);
    }
  }
  function handleIncreaseCount() {
    if (quantity === 0) {
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
      handleIncrease(updatedMeal);
    }
  }

  return (
    <div className='flex items-center rounded-md text-xl bg-LightGrey  justify-center w-full  outline outline-2 outline-Grey'>
      <button
        className={` text-Grey px-4 w-full basis[200px]  flex justify-center items-center ${isCartLoading && ' cursor-pointer'} ${mealToUpdate === undefined && 'cursor-not-allowed'}`}
        disabled={isCartLoading}
        onClick={handleDecreaseCount}
      >
        <IoMdRemove className=' stroke-[10px] text-lg' />
      </button>
      <span className='text-xl  text-MediumGrey w-full flex justify-center font-semibold outline outline-2 outline-Grey px-4'>
        {quantity}
      </span>
      <button
        className={` text-Grey px-4 w-full flex justify-center items-center ${isCartLoading && ' cursor-pointer'}`}
        disabled={isCartLoading}
        onClick={handleIncreaseCount}
      >
        <IoMdAdd className=' stroke-[10px] text-lg' />
      </button>
    </div>
  );
}
