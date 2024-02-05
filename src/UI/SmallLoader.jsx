/* eslint-disable react/prop-types */
export default function SmallLoader({ showLoading = true }) {
  return (
    <div className=' flex items-center gap-2'>
      <div className='loader loader-small'></div>
      <span
        className={`text-xl font-semibold text-Grey ${!showLoading && 'hidden invisible'}`}
      >
        Loading...
      </span>
    </div>
  );
}
