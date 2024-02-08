/* eslint-disable react/prop-types */
export default function FormCover({ loginBanner01 }) {
  return (
    <div className='bg-red-500 box-content'>
      <img className='h-full object-cover' src={loginBanner01} alt='banner' />
    </div>
  );
}
