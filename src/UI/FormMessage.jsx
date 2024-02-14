/* eslint-disable react/prop-types */
export default function FormMessage({ title, message }) {
  return (
    <div className=' flex flex-col '>
      <h1 className=' text-DarkGrey text-2xl tracking-tight font-extrabold uppercase'>
        {title}
      </h1>
      <p className=' text-Grey text-sm'>{message}</p>
    </div>
  );
}
