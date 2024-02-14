import UpdatePassword from './UpdatePassword';
import UpdatePicture from './UpdatePicture';

export default function ProfileSettings() {
  window.scrollTo({
    top: 0,
  });
  return (
    <div className=' flex flex-col p-8 items-center justify-center sm:p-10 md:p-14'>
      <div className=' h-[60px] sm:h-[80px] md:h-[100px]'></div>
      <div className=' flex flex-col gap-12 items-center '>
        <UpdatePicture />
        <UpdatePassword />
      </div>
    </div>
  );
}
