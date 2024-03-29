import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useMealPrice } from '../Features/Meals/useMealPrice';
import { currencyFormatter } from '../helper';

export default function Range() {
  const { mealPriceList, isLoading: isPriceLoading } = useMealPrice();
  const [searchParams, setSearchParams] = useSearchParams();
  let maxPrice = 0;
  if (!isPriceLoading) {
    maxPrice = Math.max(...mealPriceList);
  }
  const [price, setPrice] = useState(() => {
    if (searchParams.get('price')) {
      return searchParams.get('price');
    } else {
      return 0;
    }
  });

  function handleChange(e) {
    e.preventDefault();
    setPrice(Number(e.target.value));
  }

  let minPrice = 0;
  if (!isPriceLoading) {
    minPrice = Math.min(...mealPriceList);
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (price >= minPrice) {
        searchParams.set('price', price);
        setSearchParams(searchParams);
      }
      if (price < minPrice) {
        searchParams.delete('price');
        setSearchParams(searchParams);
      }
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [price, searchParams, setSearchParams, minPrice]);

  return (
    <div className=' flex flex-col sm:gap-2'>
      <h3
        htmlFor='price'
        className=' text-Grey text-xs font-medium sm:text-base'
      >
        Price
      </h3>
      <div className=' flex flex-col sm:gap-1'>
        <div className=' flex items-center space-x-2'>
          <span className=' w-8 text-Grey text-sm font-medium flex items-center sm:text-base'>
            {price < 100 ? `0${price}` : price}
          </span>
          <input
            type='range'
            id='price'
            className='price cursor-pointer'
            label='price'
            name='price'
            min={0}
            max={maxPrice + 20}
            step={20}
            value={price || 0}
            onChange={handleChange}
            disabled={isPriceLoading}
          />
          <span className=' text-Grey text-sm justify-center font-medium mt-auto flex items-center sm:text-base'>
            {maxPrice}
          </span>
        </div>
        {price < minPrice && price !== 0 && (
          <p className=' text-Red text-xs sm:text-sm'>
            sorry no meals under {`₹` + currencyFormatter(minPrice)}
          </p>
        )}
      </div>
    </div>
  );
}
