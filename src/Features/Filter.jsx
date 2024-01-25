import Switch from '../UI/Switch';
import Range from './Range';
import SortBy from './SortBy';
import StarRating from './StarRating';

export default function Filter() {
  return (
    <div className=" flex flex-col gap-4 px-24 py-12 ">
      <h2 className="text-xl font-bold text-DarkGrey">Filters</h2>
      <div className=" flex  items-center justify-between ">
        <div className=" flex  gap-12 ">
          <Switch color={'green'} title={'Veg'} />
          <Switch color={'red'} title={'Non-Veg'} />
          <StarRating />
          <Range />
        </div>
        <SortBy />
      </div>
    </div>
  );
}
