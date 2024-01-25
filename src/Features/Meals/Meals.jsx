import MealItem from './MealItem';

export default function Meals() {
  return (
    <div className=" flex flex-col gap-12 px-24 py-12">
      <h1 className="text-2xl font-bold text-DarkGrey">Popular Dishes</h1>
      <div className=" flex flex-wrap justify-evenly gap-x-6 gap-y-12">
        <MealItem />
      </div>
    </div>
  );
}
