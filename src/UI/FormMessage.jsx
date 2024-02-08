/* eslint-disable react/prop-types */
export default function FormMessage({ title, message }) {
  return (
    <div className=' flex flex-col gap-1'>
      <h1 className=' text-DarkGrey text-4xl tracking-tight font-extrabold uppercase mb-1'>
        {title}
      </h1>
      <p className=' text-Grey text-lg '>{message}</p>
    </div>
  );
}
