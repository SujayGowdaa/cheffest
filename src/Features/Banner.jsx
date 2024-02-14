import { banner1 } from '../Utils/GlobalConst';

export default function Banner() {
  return (
    <>
      <div className=' h-[60px] sm:h-[80px] md:h-[100px] '></div>
      <div className=' relative flex justify-center items-center'>
        <div className=' max-w-[576px] '>
          <img src={banner1} alt='banner' />
        </div>
        <div className='w-screen max-w-max absolute blur-sm brightness-[0.75] z-[-10] hidden sm:block'>
          <img className=' scale-[1.03]' src={banner1} alt='banner' />
        </div>
      </div>
    </>
  );
}
