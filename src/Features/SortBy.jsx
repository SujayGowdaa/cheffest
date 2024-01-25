import { useState } from 'react';

export default function SortBy() {
  const [option, setOption] = useState(null);

  console.log(option);

  return (
    <div>
      <select
        name="Sort By"
        onChange={(e) => setOption(e.target.value)}
        className=" h-8 rounded-md bg-LightGrey px-3 text-sm font-light text-MediumGrey focus:outline-none "
      >
        <option value="null" className=" text-xs font-light">
          Sort By
        </option>
        <option value="A-Z" className=" text-xs font-light">
          Low - High
        </option>
        <option value="Z-A" className=" text-xs font-light hover:bg-black">
          High - Low
        </option>
      </select>
    </div>
  );
}
