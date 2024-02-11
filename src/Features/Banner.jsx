import { banner1 } from '../globalVariables';

export default function Banner() {
  return (
    <>
      {/* <div className=" w-full h-[120px]"></div> */}
      <div>
        <img src={banner1} alt='banner' />
      </div>
    </>
  );
}
// className = ' before:block before:h-[120px] before:w-full';
