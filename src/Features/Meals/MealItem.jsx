import ButtonCart from '../../UI/ButtonCart';

import { currencyFormatter } from '../../helper';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import Rating from '../Rating';
import useMeals from './useMeals';
import LoadingScreen from '../LoadingScreen';

export default function MealItem() {
  const { isLoading, mealItems } = useMeals();

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      {mealItems.map((item) => {
        return (
          <div
            key={item.name}
            className="  flex w-[220px] cursor-pointer flex-col rounded-xl border-8 border-White shadow-md outline outline-2 outline-LightGrey transition duration-300 hover:scale-105 hover:shadow-xl active:scale-100"
          >
            <img src={item.image} className=" rounded-xl" />
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
                  {currencyFormatter(Math.round(item.price))}
                </p>
              </div>
              <ButtonCart className="items-end " />
            </div>
          </div>
        );
      })}
    </>
  );
}
