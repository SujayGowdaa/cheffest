import Button from '../../UI/Button';

import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import { useUpdatePicture } from './useUpdatePicture';
import { useForm } from 'react-hook-form';
import { useRemovePicture } from './useRemovePicture';
import { useAppContext } from '../../store/AppContext';

export default function UpdatePicture() {
  const [profile, setProfile] = useState();
  const { updatePicture, isPending: isUploading } = useUpdatePicture();
  const { removePicture, isPending: isRemoving } = useRemovePicture();
  const { handleSubmit } = useForm();
  const { avatar } = useAppContext();

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
    <div className=' flex flex-col gap-6 items-center '>
      <form className=' flex gap-4 flex-col ' onSubmit={handleSubmit(onSubmit)}>
        <div className=' w-[300px] h-[300px] overflow-hidden rounded-full'>
          <img src={profilePreview || avatar} alt='profile' />
        </div>
        <div className=' relative'>
          <label
            htmlFor='upload'
            className=' cursor-pointer absolute bottom-[20px] right-[30px] bg-LightGrey flex items-center justify-center p-[12px] rounded-full shadow-md'
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
        <div className=' flex gap-6 justify-center'>
          <Button type={'file'} disabled={isUploading} isPending={isUploading}>
            Upload
          </Button>
          <Button
            onClick={(e) => handleRemoveImage(e)}
            type={'remove'}
            disabled={isRemoving}
            isPending={isRemoving}
          >
            Remove
          </Button>
        </div>
      </form>
    </div>
  );
}
