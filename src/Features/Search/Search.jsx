import { useState } from 'react';
import { IoHome } from 'react-icons/io5';
import NoSearchData from './NoSearchData';
import LoadingScreen from '../../UI/LoadingScreen';
import SearchItem from './SearchItem';
import { useMeals } from '../Meals/useMeals';
import SearchMessage from './SearchMessage';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
  const [isClicked, setIsClicked] = useState(false);
  const { mealItems, isLoading } = useMeals();
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  window.scrollTo({
    top: 0,
  });

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick() {
    navigate(-1);
  }

  let searchResults = [];
  searchResults = mealItems?.filter((meal) =>
    meal.name
      .toLowerCase()
      .replaceAll(' ', '')
      .includes(input.toLowerCase().replaceAll(' ', ''))
  );

  return (
    <>
      <div className=' w-full h-[60px] sm:h-[80px] md:h-[100px]'></div>

      <div className=' flex justify-center items-center p-4 flex-col gap-8 w-full sm:p-10 sm:gap-12 md:px-24'>
        <div
          className={`flex text-MediumGrey w-full sm:w-[500px] sm:justify-center sm:items-center ${isClicked && 'outline outline-[2px] outline-Orange rounded-md '}`}
          onClick={() => setIsClicked(true)}
          onBlur={() => setIsClicked(false)}
        >
          <input
            className='p-3 bg-LightGrey rounded-md rounded-r-none  focus-visible:outline-none text-lg text-DarkGrey font-medium h-[40px] w-full sm:w-[500px] sm:h-[50px] '
            type='text'
            onChange={(e) => handleChange(e)}
          />
          <IoHome
            className=' text-4xl cursor-pointer rounded-l-none text-Grey hover:text-MediumGrey transition duration-200 bg-LightGrey p-1 w-[40px] h-[40px] rounded-md sm:p-2 sm:w-[50px] sm:h-[50px]'
            onClick={handleClick}
          />
        </div>
        {input === '' && <SearchMessage />}
        {isLoading && <LoadingScreen />}
        {input !== '' && !isLoading && (
          <div className=' flex flex-wrap justify-center gap-x-4 gap-y-8 '>
            {searchResults?.length === 0 ? (
              <NoSearchData />
            ) : (
              <SearchItem searchResults={searchResults} />
            )}
          </div>
        )}
      </div>
    </>
  );
}
