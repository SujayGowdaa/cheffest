/* eslint-disable react/prop-types */
const veg =
  "https://yyfjumfmwgnvczjziqao.supabase.co/storage/v1/object/public/icons/veg.png?t=2024-02-03T07%3A23%3A28.805Z";

export default function TypeVeg({ type }) {
  return (
    <div className=" flex items-center gap-4">
      <div className=" w-[40px] h-[40px] p-2 bg-LightGrey flex justify-center items-center rounded-full">
        <img src={veg} alt={type} />
      </div>
      <span className=" text-lg font-bold text-Green capitalize">{type}</span>
    </div>
  );
}
