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
        className={`relative p-3 text-sm text-Orange font-semibold rounded-md  border-[3px] border-Orange gap-2 uppercase hover:text-orange-500 hover:border-orange-500 transition duration-300 flex items-center justify-center ${disabled && ' cursor-not-allowed'}`}
      >
        {children}
      </button>
    );

  if (type === 'checkout' || type === 'login')
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`  gap-3 text-sm relative buttonCheckout p-3 tracking-wide bg-Green text-White font-semibold rounded-md shadow-md border-2 border-DarkGreen flex items-center justify-center overflow-hidden active:bg-DarkGreen uppercase ${disabled && ' cursor-not-allowed'}`}
      >
        {children}
        {isPending && <SmallLoader showLoading={false} />}
      </button>
    );

  if (type === 'file')
    return (
      <button
        disabled={disabled}
        className={` flex gap-2 transition duration-200 p-3 text-sm px-6 bg-Green text-DarkGreen rounded-md  font-semibold uppercase hover:text-gray-500'
        ${disabled && ' cursor-not-allowed bg-LightGrey  disabled:text-Grey'}`}
        onClick={onClick}
      >
        {children} {isPending && <SmallLoader showLoading={false} />}
      </button>
    );
  if (type === 'remove')
    return (
      <button
        disabled={disabled}
        className={` flex gap-2  transition duration-200 p-3 text-sm px-6 bg-red-400 rounded-md text-red-700 font-semibold uppercase hover:text-red-800  ${disabled && ' cursor-not-allowed  disabled:text-Grey disabled:bg-LightGrey'}`}
        type='button'
        onClick={onClick}
      >
        {children} {isPending && <SmallLoader showLoading={false} />}
      </button>
    );
}
