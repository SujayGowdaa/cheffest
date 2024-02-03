/* eslint-disable react/prop-types */
const cuisine =
  "https://yyfjumfmwgnvczjziqao.supabase.co/storage/v1/object/public/icons/cuisine.png?t=2024-02-03T07%3A22%3A59.381Z";

export default function Category({ category }) {
  return (
    <div className=" flex items-center gap-4">
      <div className=" w-[40px] h-[40px] p-2 bg-LightGrey flex justify-center items-center rounded-full">
        <img className=" mb-[4px]" src={cuisine} alt={category} />
      </div>
      <span className=" text-lg font-semibold text-Grey capitalize">
        {category}
      </span>
    </div>
  );
}
