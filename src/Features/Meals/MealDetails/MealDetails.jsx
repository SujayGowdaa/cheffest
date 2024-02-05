import ButtonCart from '../../../UI/ButtonCart';
import LoadingScreen from '../../../UI/LoadingScreen';

import Price from './Price';
import Name from './Name';
import Description from './Description';
import Ingredients from './Ingredients';
import Ratings from './Ratings';
import TypeNonVeg from './TypeNonVeg';
import Image from './Image';

import { useCart } from '../../Cart/useCart';
import { useMeals } from '../useMeals';
import TypeVeg from './TypeVeg';
import Category from './Category';
import MealCount from './MealCount.JSX';
import { useAppContext } from '../../../store/AppContext';
import SmallLoader from '../../../UI/SmallLoader';
import { FaWindowClose } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function MealDetails() {
  const { mealItems, isLoading } = useMeals();
  const { data: cartData, isPending } = useCart();
  const { isCartLoading } = useAppContext();
  const navigate = useNavigate();

  if (isLoading || isPending)
    return (
      <div className=' h-screen w-screen flex flex-col justify-center items-center max-w-max'>
        <div className=' w-full h-[120px]'></div>
        <LoadingScreen />
      </div>
    );

  return (
    <div className=' flex flex-col max-w-max h-screen'>
      {/* <div className=' w-full h-[120px] '></div> */}
      {mealItems?.map((item) => {
        return (
          <div
            key={item.id}
            className=' flex flex-col justify-center items-center gap-6 p-24 h-screen'
          >
            <div className=' flex gap-16 items-center '>
              <Image size='50' image={item.image} name={item.name} />
              <div className=' flex flex-col w-[50%] gap-8'>
                <div className=' flex flex-col gap-4'>
                  <div className=' flex justify-between'>
                    <Name name={item.name} />
                    {isCartLoading ? (
                      <SmallLoader showLoading={false} />
                    ) : (
                      <FaWindowClose
                        className=' text-4xl h-full cursor-pointer text-Grey'
                        onClick={() => navigate(-1)}
                      />
                    )}
                  </div>
                  <Description description={item.description} />
                </div>
                <Ingredients ingredients={item.ingredients} />

                <div className=' flex flex-wrap gap-y-6 gap-12 justify-between'>
                  {item.type === 'veg' ? (
                    <TypeVeg type={item.type} />
                  ) : (
                    <TypeNonVeg type={item.type} />
                  )}
                  <Category category={item.category} />
                  <Ratings rating={item.rating} />
                </div>
                <Price price={item.price} />
                <div className='flex items-start gap-6 flex-wrap'>
                  <MealCount cartData={cartData} item={item} />
                  <ButtonCart id={item.id} item={item} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
