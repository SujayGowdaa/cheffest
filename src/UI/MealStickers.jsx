import Rating from './Rating';

/* eslint-disable react/prop-types */
export default function MealStickers({
  rating,
  gap = 'gap-2',
  width = 'w-[30px]',
  height = 'h-[30px]',
  padding = 'p-1',
  image,
  alt,
  type,
  title,
}) {
  return (
    <div className={`flex ${gap} items-center`}>
      <div
        className={`${width} ${height} ${padding} bg-LightGrey flex justify-center items-center rounded-full`}
      >
        <img src={image} alt={rating || alt} />
      </div>
      {type === 'star' && <Rating rating={Math.floor(rating)} size='lg' />}
      <span
        className={`  ${(type === 'star' && ' text-Yellow text-base') || (type === 'non-veg' && ' text-Red') || (type === 'veg' && ' text-Green') || (type === 'cuisine' && ' font-light text-Grey')} text-sm mt-1 font-semibold  capitalize text-Grey`}
      >
        {type === 'star' && Math.floor(rating)}
        {title}
      </span>
    </div>
  );
}
