import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io';

export default function ButtonCart() {
  const isIncart = false;
  return (
    <button
      className={` flex w-full items-center justify-center gap-2 rounded-md border-2  p-1 text-White shadow-md  transition duration-100 active:scale-95 ${isIncart ? 'border-DarkRed bg-Red' : 'border-DarkGreen bg-Green'}`}
    >
      <span className=" font-semibold ">
        {isIncart ? 'Remove' : 'Add to cart'}
      </span>
      {isIncart ? <IoIosRemoveCircle /> : <IoIosAddCircle />}
    </button>
  );
}
