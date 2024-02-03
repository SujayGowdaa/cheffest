/* eslint-disable react/prop-types */
const nonVeg =
  "https://yyfjumfmwgnvczjziqao.supabase.co/storage/v1/object/public/icons/nonVeg.png?t=2024-02-03T07%3A23%3A16.414Z";

export default function TypeNonVeg({ type }) {
  return (
    <div className=" flex items-center gap-4">
      <div className=" w-[40px] h-[40px] p-2 bg-LightGrey flex justify-center items-center rounded-full">
        <img src={nonVeg} alt={type} />
      </div>
      <span className=" text-lg font-bold text-Red capitalize">{type}</span>
    </div>
  );
}
