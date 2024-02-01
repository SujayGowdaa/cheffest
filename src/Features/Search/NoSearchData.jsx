export default function NoSearchData() {
  return (
    <div className=" flex flex-col gap-12 items-center">
      <p className=" text-lg text-MediumGrey">
        We’re sorry. We were not able to find a match :(
      </p>
      <div className=" w-[400px] ">
        <img
          src="https://yyfjumfmwgnvczjziqao.supabase.co/storage/v1/object/public/banners/noData.png"
          alt="no data"
        />
      </div>
    </div>
  );
}
