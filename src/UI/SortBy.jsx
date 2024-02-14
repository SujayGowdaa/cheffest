/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(() => {
    if (searchParams.get('sort-by')) {
      return searchParams.get('sort-by');
    } else {
      return null;
    }
  });

  function handleChange(value) {
    searchParams.set('sort-by', value);
    setSearchParams(searchParams);

    if (searchParams.get('sort-by') === 'default') {
      searchParams.delete('sort-by');
      setSearchParams(searchParams);
    }
    setSortBy(searchParams.get('sort-by'));
  }

  return (
    <div className=' flex flex-col gap-2  sm:gap-3'>
      <h3 className=' text-Grey text-xs font-medium sm:text-base'>Sort By</h3>
      <select
        name='Sort By'
        value={sortBy || ''}
        onChange={(e) => handleChange(e.target.value)}
        className=' h-8 rounded-md bg-LightGrey px-3 text-sm font-light text-MediumGrey focus:outline-none cursor-pointer sm:px-4  '
      >
        {options.map((op) => (
          <option className=' cursor-pointer' key={op.label} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </div>
  );
}
