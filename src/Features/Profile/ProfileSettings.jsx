import UpdatePassword from './UpdatePassword';
import UpdatePicture from './UpdatePicture';

export default function ProfileSettings() {
  window.scrollTo({
    top: 0,
  });
  return (
    <div className=' flex flex-col p-4 '>
      <div className=' h-[80px]'></div>
      <div className=' flex flex-col gap-12'>
        <UpdatePicture />
        <UpdatePassword />
      </div>
    </div>
  );
}
