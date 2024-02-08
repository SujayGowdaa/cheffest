/* eslint-disable react/prop-types */

import SmallLoader from './SmallLoader';

export default function Button({
  children,
  onClick,
  type,
  disabled,
  isPending,
}) {
  if (type === 'clear')
    return (
      <button
        disabled={disabled}
        type='button'
        onClick={onClick}
        className={`relative p-4  text-Orange font-semibold rounded-md  border-[3px] border-Orange flex items-center gap-2 justify-center uppercase hover:text-orange-500 hover:border-orange-500 transition duration-300 ${disabled && ' cursor-not-allowed'}`}
      >
        {children}
      </button>
    );

  if (type === 'checkout' || type === 'login')
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`  gap-3 text-lg relative buttonCheckout p-4 tracking-wide bg-Green text-White font-semibold rounded-md shadow-md border-2 border-DarkGreen flex items-center  justify-center overflow-hidden active:bg-DarkGreen uppercase ${disabled && ' cursor-not-allowed'}`}
      >
        {children}
      </button>
    );

  if (type === 'file')
    return (
      <button
        disabled={disabled}
        className={` flex gap-2 transition duration-200 px-6 py-4 bg-LightGrey rounded-md text-gray-400 font-semibold uppercase hover:text-gray-500'
        ${disabled && ' cursor-not-allowed'}`}
        onClick={onClick}
      >
        {children} {isPending && <SmallLoader showLoading={false} />}
      </button>
    );
  if (type === 'remove')
    return (
      <button
        disabled={disabled}
        className={` flex gap-2  transition duration-200 px-6 py-4 bg-red-400 rounded-md text-red-700 font-semibold uppercase hover:text-red-800' ${disabled && ' cursor-not-allowed'}`}
        type='button'
        onClick={onClick}
      >
        {children} {isPending && <SmallLoader showLoading={false} />}
      </button>
    );
}
