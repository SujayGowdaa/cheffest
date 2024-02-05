import NoData from '../../UI/NoData';
import SmallLoader from '../../UI/SmallLoader';
import MealItem from './MealItem';
import { useMeals } from './useMeals';

export default function Meals() {
  const { mealItems, isLoading: isLoadingMeals } = useMeals();
  const mealLength = mealItems?.length || 0;

  return (
    <div className=' flex flex-col gap-12 px-24 py-12  w-[100%] justify-between bg-white '>
      <div className=' flex justify-between items-center'>
        <div className=' flex items-center gap-4'>
          <h1 className=' text-2xl font-bold text-DarkGrey  '>
            Popular Dishes
          </h1>
          {isLoadingMeals && <SmallLoader showLoading={false} />}
        </div>
        <p className=' text-Grey text-sm font-medium'>
          Meals found :{' '}
          <span className=' text-xl text-Green font-semibold'>
            {mealLength < 10 ? `0${mealLength}` : mealLength}
          </span>
        </p>
      </div>
      <div className=' flex flex-wrap justify-around gap-x-6 gap-y-16'>
        {mealItems?.length === 0 ? <NoData /> : <MealItem />}
      </div>
    </div>
  );
}
