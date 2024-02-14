import Button from '../../UI/Button';

import { FaEdit } from 'react-icons/fa';
import { useUpdatePicture } from './useUpdatePicture';
import { useForm } from 'react-hook-form';
import { useRemovePicture } from './useRemovePicture';
import { useAppContext } from '../../store/AppContext';
import { placeHolderImage } from '../../Utils/GlobalConst';

export default function UpdatePicture() {
  const { updatePicture, isPending: isUploading } = useUpdatePicture();
  const { removePicture, isPending: isRemoving } = useRemovePicture();
  const { handleSubmit } = useForm();
  const { avatar, profile, setProfile } = useAppContext();

  const profilePreview = profile ? URL.createObjectURL(profile) : null;

  function onSubmit() {
    updatePicture(profile);
  }

  function handleRemoveImage(e) {
    e.stopPropagation();
    removePicture();
    setProfile(null);
  }

  return (
    <div className=' flex flex-col justify-center items-center gap-6'>
      <div className=' relative w-[200px]'>
        <div className='w-[200px] h-[200px] overflow-hidden rounded-full'>
          <img
            className=' w-auto'
            src={profilePreview || avatar}
            alt='profile'
          />
        </div>
        <label
          htmlFor='upload'
          className=' cursor-pointer absolute bottom-[5px] right-[10px] bg-LightGrey flex items-center justify-center p-[12px] rounded-full shadow-md'
        >
          <FaEdit className=' text-3xl relative right-[-2px] top-[-2px] text-Grey' />
          <input
            className=' hidden'
            id='upload'
            type='file'
            onChange={(e) => setProfile(e.target.files[0])}
          />
        </label>
      </div>
      <form className=' ' onSubmit={handleSubmit(onSubmit)}>
        <div className=' flex gap-6 justify-between w-full'>
          <Button
            type={'file'}
            disabled={isUploading || !profile}
            isPending={isUploading}
          >
            Upload
          </Button>
          <Button
            onClick={(e) => handleRemoveImage(e)}
            type={'remove'}
            disabled={isRemoving || avatar === placeHolderImage}
            isPending={isRemoving}
          >
            Remove
          </Button>
        </div>
      </form>
    </div>
  );
}
