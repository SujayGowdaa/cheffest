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
      <div className=' w-full h-[120px]'></div>
      <div className=' h-screen overflow-scroll'>
        <div className=' flex justify-center items-center p-24  flex-col gap-12 '>
          <div
            className={`flex justify-center items-center text-MediumGrey ${isClicked && 'outline outline-[3px] outline-Orange rounded-md '}`}
            onClick={() => setIsClicked(true)}
            onBlur={() => setIsClicked(false)}
          >
            <input
              className=' p-3 px-4 bg-LightGrey rounded-md rounded-r-none w-[600px] focus-visible:outline-none text-xl text-DarkGrey font-medium h-[50px]'
              type='text'
              onChange={(e) => handleChange(e)}
            />
            <IoHome
              className=' text-4xl cursor-pointer rounded-l-none text-Grey hover:text-MediumGrey transition duration-200 bg-LightGrey p-3 w-[50px] h-[50px] rounded-md'
              onClick={handleClick}
            />
          </div>
          {input === '' && <SearchMessage />}
          {isLoading && <LoadingScreen />}
          {input !== '' && !isLoading && (
            <div className=' flex flex-wrap justify-around gap-x-6 gap-y-16 '>
              {searchResults?.length === 0 ? (
                <NoSearchData />
              ) : (
                <SearchItem searchResults={searchResults} />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
