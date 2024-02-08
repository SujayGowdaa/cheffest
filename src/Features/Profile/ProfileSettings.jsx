import UpdatePassword from './UpdatePassword';
import UpdatePicture from './UpdatePicture';

export default function ProfileSettings() {
  return (
    <div className=' flex flex-col items-center px-24 py-24 '>
      <div className=' h-[120px]'></div>
      <div className=' flex flex-col gap-24'>
        <UpdatePicture />
        <UpdatePassword />
      </div>
    </div>
  );
}
