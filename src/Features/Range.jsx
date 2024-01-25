import { useState } from 'react';

export default function Range() {
  const [price, setPrice] = useState(0);

  return (
    <div className=" flex flex-col gap-2">
      <h3 htmlFor="price" className=" text-Grey text-sm font-medium">
        Price
      </h3>
      <div className=" flex items-center  gap-2 ">
        <input
          type="range"
          id="price"
          className="price"
          name="price"
          max={1000}
          min={50}
          step={50}
          onChange={(e) => setPrice(e.target.value)}
        />
        <span className=" text-Grey text-md justify-centerfont-medium mt-auto flex  items-center">
          {price}
        </span>
      </div>
    </div>
  );
}
