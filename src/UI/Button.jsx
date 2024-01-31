/* eslint-disable react/prop-types */

export default function Button({ children, onClick, type }) {
  if (type === "clear")
    return (
      <button
        onClick={onClick}
        className=" relative p-4  text-Orange font-semibold rounded-md  border-[3px] border-Orange flex items-center gap-2 justify-center uppercase hover:text-orange-500 hover:border-orange-500 transition duration-300"
      >
        {children}
      </button>
    );

  if (type === "checkout")
    return (
      <button
        onClick={onClick}
        className="buttonCheckout relative p-4 bg-Green text-White font-semibold rounded-md shadow-md border-2 border-DarkGreen flex items-center gap-2 justify-center overflow-hidden active:bg-DarkGreen uppercase "
      >
        {children}
      </button>
    );
}
