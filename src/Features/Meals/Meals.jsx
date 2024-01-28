import NoData from "../../UI/NoData";
import MealItem from "./MealItem";
import useMeals from "./useMeals";

export default function Meals() {
  const { mealItems } = useMeals();
  const mealLength = mealItems?.length || 0;

  return (
    <div className=" flex flex-col gap-12 px-24 py-12  w-[100%] justify-between bg-white">
      <div className=" flex justify-between">
        <h1 className="mb-2 text-2xl font-bold text-DarkGrey">
          Popular Dishes
        </h1>
        <p className=" text-Grey text-sm font-semibold">
          Meals found :{" "}
          <span className=" text-xl text-Green">
            {mealLength < 10 ? `0${mealLength}` : mealLength}
          </span>
        </p>
      </div>
      <div className="border-b-LighGrey flex flex-wrap justify-around gap-x-6 gap-y-16 border-b-2 ">
        {mealItems?.length === 0 ? <NoData /> : <MealItem />}
      </div>
    </div>
  );
}
