/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HiMiniStar } from 'react-icons/hi2';

export default function StarRating({
  maxRating = 5,
  curRating = 0,
  size = 'xl',
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className=" flex flex-col gap-2">
      <h3 className=" text-Grey text-sm font-medium">Rating</h3>
      <div className=" flex items-center  gap-2 ">
        <div className=" flex">
          {[...Array(maxRating)].map((_, i) => {
            const full = hover ? hover > i : curRating >= i + 1;
            return (
              <div
                key={i}
                onClick={() => setRating(i + 1)}
                onMouseEnter={() => setHover(i + 1)}
                onMouseLeave={() => setHover(rating)}
              >
                {full ? (
                  <HiMiniStar className={`text-${size}  text-Yellow`} />
                ) : (
                  <HiMiniStar className={`text-${size}  text-gray-200 `} />
                )}
              </div>
            );
          })}
        </div>
        <span className=" text-Grey text-md justify-centerfont-medium mt-auto flex w-3  items-center">
          {hover || rating}
        </span>
      </div>
    </div>
  );
}
