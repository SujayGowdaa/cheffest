/* eslint-disable react/prop-types */
export default function Image({ image, name, size = "100" }) {
  return (
    <div className={` w-[${size}%] h-full rounded-lg overflow-hidden relative`}>
      <img className=" h-full w-auto object-contain" src={image} alt={name} />
      <img
        className=" h-full w-auto object-cover absolute z-[-1] blur-[6px] brightness-[0.6] scale-105 top-0"
        src={image}
        alt={name}
      />
    </div>
  );
}
