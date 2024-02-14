/* eslint-disable react/prop-types */
export default function Description({ description }) {
  return (
    <p className=' text-sm text-center text-MediumGrey max-w-[500px] md:text-base md:text-left'>
      {description}
    </p>
  );
}
