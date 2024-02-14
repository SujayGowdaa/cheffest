import { banner1 } from '../Utils/GlobalConst';

export default function Banner() {
  return (
    <>
      <div className=' h-[60px] sm:h-[80px] md:h-[100px] '></div>
      <div>
        <img src={banner1} alt='banner' />
      </div>
    </>
  );
}
