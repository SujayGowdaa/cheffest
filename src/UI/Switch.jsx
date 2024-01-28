/* eslint-disable react/prop-types */
export default function Switch({
  title,
  handleVegClick,
  handleNonVegClick,
  isBtnOn,
}) {
  function handleClick() {
    if (title === "veg") {
      handleVegClick();
    } else {
      handleNonVegClick();
    }
  }

  return (
    <div className=" flex flex-col gap-2" onClick={handleClick}>
      <h3 className=" text-MediumGrey text-sm font-medium capitalize">
        {title}
      </h3>
      <div
        className={` button ${title === "veg" && isBtnOn.veg && "veg"} ${title === "nonVeg" && isBtnOn.nonVeg && "nonVeg"}`}
      ></div>
    </div>
  );
}
