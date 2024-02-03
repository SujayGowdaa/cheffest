/* eslint-disable react/prop-types */
import Rating from "../../../UI/Rating";
const star =
  "https://yyfjumfmwgnvczjziqao.supabase.co/storage/v1/object/public/icons/star.png?t=2024-02-03T08%3A50%3A05.643Z";

export default function Ratings({ rating }) {
  return (
    <div className=" flex items-center gap-4">
      <div className=" flex gap-2 items-center">
        <div className=" w-[40px] h-[40px] p-2 bg-LightGrey flex justify-center items-center rounded-full">
          <img src={star} alt={rating} />
        </div>
        <Rating rating={Math.floor(rating)} size="2xl" />
        <span className=" text-xl mt-1 font-medium text-Yellow">
          {Math.floor(rating)}
        </span>
      </div>
    </div>
  );
}
