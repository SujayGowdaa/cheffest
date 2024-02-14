import { useForm } from 'react-hook-form';

import BackgroundCover from '../../UI/BackgroundCover';
import Container from '../../UI/Container';
import FormLinks from '../../UI/FormLinks';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Logo from '../../UI/Logo';
import FormCover from '../../UI/FormCover';
import SmallLoader from '../../UI/SmallLoader';
import useResetPassword from './useResetPassword';
import FormMessage from '../../UI/FormMessage';

import { loginBanner01 } from '../../Utils/GlobalConst';

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { resetPassword, isPending } = useResetPassword();

  function onSubmit(data) {
    resetPassword(data.email);
  }

  return (
    <>
      <Container>
        <div className=' flex shadow-xl h-screen justify-center items-center p-6'>
          <div className=' flex bg-White '>
            <div className=' flex flex-col gap-2 sm:p-12 md:p-16'>
              <div className=' flex flex-col gap-3 w-[300px]'>
                <Logo size={'w-[120px]'} />
                <FormMessage
                  title={"Let's get you back"}
                  message={'We will send you a link to reset your password'}
                />
                <form
                  className=' flex flex-col gap-6'
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className=' flex flex-col gap-6'>
                    <Input
                      title={'Email Address'}
                      id={'email'}
                      placeholder={'Enter email address'}
                      register={register('email', {
                        required: 'This field is required',
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: 'Provide a valid email address',
                        },
                      })}
                      errors={errors}
                    />
                  </div>
                  <Button type={'login'}>
                    Verify Now{' '}
                    {isPending && <SmallLoader showLoading={false} />}
                  </Button>
                </form>
              </div>
              <FormLinks form='reset' />
            </div>
            <FormCover loginBanner01={loginBanner01} />
          </div>
        </div>
      </Container>
      <BackgroundCover loginBanner01={loginBanner01} />
    </>
  );
}
