export default function NoData() {
  return (
    <div className=" w-[400px] flex flex-col items-center gap-2">
      <img
        className=" w-[300px]"
        src="https://yyfjumfmwgnvczjziqao.supabase.co/storage/v1/object/public/banners/empty.png?t=2024-02-01T17%3A16%3A36.910Z"
        alt="empty cart"
      />
      <p className=" text-md  text-center">
        <span className=" font-semibold text-xl ">"Uh-oh!</span>
        <br /> Our cart is on a diet. It needs some items to feast on. What will
        you add today?"
      </p>
    </div>
  );
}
