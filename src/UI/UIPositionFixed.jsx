/* eslint-disable react/prop-types */

export default function UIPositionFixed({ children }) {
  return (
    <div className=' flex max-w-max justify-center items-center'>
      <div className='fixed max-w-max overflow-hidden top-0 z-20 w-full pointer-events-none'>
        <div className=' pointer-events-none h-screen'>{children}</div>
      </div>
    </div>
  );
}
