import { useState } from "react";
import { IoHome } from "react-icons/io5";
import NoSearchData from "./NoSearchData";
import LoadingScreen from "../../UI/LoadingScreen";
import SearchItem from "./SearchItem";
import { useMeals } from "../Meals/useMeals";
import SearchMessage from "./SearchMessage";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const { mealItems, isLoading } = useMeals();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

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
      .replaceAll(" ", "")
      .includes(input.toLowerCase().replaceAll(" ", "")),
  );

  return (
    <>
      <div className=" w-full h-[120px]"></div>
      <div className=" h-screen overflow-scroll">
        <div className=" flex justify-center items-center p-24  flex-col gap-12 ">
          <div className=" flex justify-center items-center gap-6 text-MediumGrey ">
            <input
              className=" p-3 px-4 bg-LightGrey rounded-md w-[600px] text-xl text-DarkGrey font-medium"
              type="text"
              onChange={(e) => handleChange(e)}
            />
            <IoHome
              className=" text-4xl cursor-pointer text-Grey hover:text-MediumGrey transition duration-200"
              onClick={handleClick}
            />
          </div>
          {input === "" && <SearchMessage />}
          {isLoading && <LoadingScreen />}
          {input !== "" && !isLoading && (
            <div className=" flex flex-wrap justify-around gap-x-6 gap-y-16 ">
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
