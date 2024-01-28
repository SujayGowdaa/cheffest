/* eslint-disable react/prop-types */
import { HiMiniStar } from "react-icons/hi2";

export default function Rating({ rating = 0 }) {
  const length = 5;
  return (
    <div className=" flex">
      {[...Array(length)].map((_, i) => {
        let full = rating > i;

        return (
          <span key={i}>
            {full ? (
              <HiMiniStar className={`text-sm text-Yellow`} />
            ) : (
              <HiMiniStar className={`text-sm text-gray-200`} />
            )}
          </span>
        );
      })}
    </div>
  );
}
