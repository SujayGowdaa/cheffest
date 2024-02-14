import NoData from '../../UI/NoData';
import SmallLoader from '../../UI/SmallLoader';
import MealItem from './MealItem';

import { useMeals } from './useMeals';

export default function Meals() {
  const { mealItems, isLoading: isLoadingMeals } = useMeals();
  const mealLength = mealItems?.length || 0;

  return (
    <div className=' flex flex-col gap-4 w-[100%] px-4 py-4 bg-white md:gap-6 sm:px-10 sm:py-10 md:px-24'>
      <div className=' flex justify-between items-center   '>
        <div className=' flex items-center gap-2 sm:gap-3 '>
          <h1 className=' text-xl font-bold text-DarkGrey sm:text-2xl'>
            Popular Dishes
          </h1>
          {isLoadingMeals && <SmallLoader showLoading={false} />}
        </div>
        <p className=' text-Grey text-xs font-medium sm:text-sm'>
          Meals found :{' '}
          <span className=' text-lg text-Green font-semibold sm:text-xl'>
            {mealLength < 10 ? `0${mealLength}` : mealLength}
          </span>
        </p>
      </div>
      <div className=' flex flex-wrap justify-evenly gap-x-2 gap-y-6 sm:gap-x-4 sm:gap-y-8 '>
        {mealItems?.length === 0 ? <NoData /> : <MealItem />}
      </div>
    </div>
  );
}
