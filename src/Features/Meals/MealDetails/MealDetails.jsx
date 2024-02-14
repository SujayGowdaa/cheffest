import { useNavigate } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';

import ButtonCart from '../../../UI/ButtonCart';
import LoadingScreen from '../../../UI/LoadingScreen';
import Price from './Price';
import Name from './Name';
import Description from './Description';
import Ingredients from './Ingredients';
import Image from './Image';
import MealCount from './MealCount.JSX';
import SmallLoader from '../../../UI/SmallLoader';
import MealStickers from '../../../UI/MealStickers';

import { useAppContext } from '../../../store/AppContext';
import { useCart } from '../../Cart/useCart';
import { useMeals } from '../useMeals';
import { cuisine, nonVeg, star, veg } from '../../../Utils/GlobalConst';

export default function MealDetails() {
  const { mealItems, isLoading } = useMeals();
  const { data: cartData, isPending } = useCart();
  const { isCartLoading } = useAppContext();
  const navigate = useNavigate();

  if (isLoading || isPending) return <LoadingScreen />;

  return (
    <div className=' flex flex-col '>
      <div className=' w-full h-[60px] sm:h-[80px] md:h-[100px] '></div>
      {mealItems?.map((item) => {
        return (
          <div
            key={item.id}
            className=' flex flex-col justify-center items-center gap-6 p-4 h-screen'
          >
            <div className=' flex flex-col gap-6 items-center justify-center md:flex-row md:gap-12'>
              <Image
                size='w-[300px] md:w-[400px]'
                image={item.image}
                name={item.name}
              />
              <div className=' flex flex-col gap-4 md:gap-6'>
                <div className=' flex flex-col gap-2 md:items-start'>
                  <div className=' flex justify-center gap-6 w-full md:justify-between'>
                    <Name name={item.name} />
                    {isCartLoading ? (
                      <SmallLoader showLoading={false} />
                    ) : (
                      <FaWindowClose
                        className=' text-xl h-full cursor-pointer text-Grey md:text-2xl'
                        onClick={() => navigate(-1)}
                      />
                    )}
                  </div>
                  <Description description={item.description} />
                  <Ingredients ingredients={item.ingredients} />
                </div>
                <div className=' flex flex-wrap justify-center gap-y-3 gap-x-6 md:gap-x-12 md:gap-y-6  md:justify-normal'>
                  {item.type === 'veg' ? (
                    <MealStickers
                      title={item.type}
                      image={veg}
                      alt={item.type}
                      type={'veg'}
                      padding='p-[6px] md:p-[8px]'
                      width='w-[30px] md:w-[40px]'
                      height='h-[30px] md:h-[40px]'
                    />
                  ) : (
                    <MealStickers
                      title={item.type}
                      image={nonVeg}
                      alt={item.type}
                      type={'non-veg'}
                      padding='p-[6px] md:p-[8px]'
                      width='w-[30px] md:w-[40px]'
                      height='h-[30px] md:h-[40px]'
                    />
                  )}
                  <MealStickers
                    title={item.category}
                    image={cuisine}
                    alt={item.category}
                    type={'cuisine'}
                    padding='p-[6px] md:p-[8px]'
                    width='w-[30px] md:w-[40px]'
                    height='h-[30px] md:h-[40px]'
                  />
                  <MealStickers
                    image={star}
                    alt={item.rating}
                    rating={item.rating}
                    type={'star'}
                    gap='gap-2'
                    padding='p-[6px] md:p-[8px]'
                    width='w-[30px] md:w-[40px]'
                    height='h-[30px] md:h-[40px]'
                  />
                </div>
                <Price price={item.price} />
                <div className='flex flex-col  items-start gap-4'>
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
