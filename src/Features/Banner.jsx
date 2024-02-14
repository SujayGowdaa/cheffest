import { banner1 } from '../Utils/GlobalConst';

export default function Banner() {
  return (
    <>
      <div className=' w-full h-[60px]'></div>
      <div>
        <img src={banner1} alt='banner' />
      </div>
    </>
  );
}
