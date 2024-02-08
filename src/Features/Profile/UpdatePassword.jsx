import { useForm } from 'react-hook-form';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import SmallLoader from '../../UI/SmallLoader';
import useUpdatePassword from './useUpdatePassword';

export default function UpdatePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const { updatePassword, isPending } = useUpdatePassword();

  function onSubmit(data) {
    const newPassword = data.confirmPassword;
    updatePassword(newPassword);
  }

  return (
    <div className=' flex flex-col gap-12 min-w-[450px] '>
      <h1 className=' text-center text-MediumGrey font-semibold text-3xl capitalize'>
        Update Password
      </h1>
      <form className=' flex flex-col gap-12' onSubmit={handleSubmit(onSubmit)}>
        <div className=' flex flex-col gap-12'>
          <Input
            title={'Password'}
            id={'password'}
            placeholder={'Enter password'}
            register={register('password', {
              required: 'This field is required',
              minLength: {
                value: 6,
                message: 'Should be atleast 6 characters',
              },
            })}
            errors={errors}
          />
          <Input
            title={'Confirm Password'}
            id={'confirmPassword'}
            type={'password'}
            placeholder={'Re-Enter password'}
            register={register('confirmPassword', {
              required: 'This field is required',
              minLength: {
                value: 6,
                message: 'Should be atleast 6 characters',
              },
              validate: (confirmPassword) => {
                return (
                  confirmPassword === getValues().password ||
                  'Password should match'
                );
              },
            })}
            errors={errors}
          />
        </div>
        <Button type={'login'} disabled={isPending}>
          Update password {isPending && <SmallLoader showLoading={false} />}
        </Button>
      </form>
    </div>
  );
}
