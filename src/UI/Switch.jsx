/* eslint-disable react/prop-types */
export default function Switch({
  title,
  handleVegClick,
  handleNonVegClick,
  isBtnOn,
}) {
  function handleClick() {
    if (title === 'veg') {
      handleVegClick();
    } else {
      handleNonVegClick();
    }
  }

  return (
    <div className=' flex flex-col gap-2 sm:gap-3' onClick={handleClick}>
      <h3 className=' text-Grey text-xs font-medium capitalize sm:text-base'>
        {title}
      </h3>
      <div
        className={` button ${title === 'veg' && isBtnOn.veg && 'veg'} ${title === 'nonVeg' && isBtnOn.nonVeg && 'nonVeg'}`}
      ></div>
    </div>
  );
}
