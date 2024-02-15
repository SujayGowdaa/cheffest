import { useAppContext } from '../../store/AppContext';
import UpdatePassword from './UpdatePassword';
import UpdatePicture from './UpdatePicture';

export default function ProfileSettings() {
  const { isTestId } = useAppContext();

  window.scrollTo({
    top: 0,
  });

  return (
    <>
      <div className=' h-[60px] sm:h-[80px] md:h-[100px]'></div>
      <div className=' flex flex-col p-8 items-center justify-center sm:p-10 md:p-14'>
        <div className=' flex flex-col gap-12 items-center '>
          <UpdatePicture isTestId={isTestId} />

          {isTestId && (
            <p className=' text-xs text-center text-Red'>
              You cannot make any changes to this account, sign up to use this
              feature.
            </p>
          )}
          <UpdatePassword isTestId={isTestId} />
        </div>
      </div>
    </>
  );
}
