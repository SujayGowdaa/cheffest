import { useForm } from 'react-hook-form';

import Container from '../../UI/Container';
import FormMessage from '../../UI/FormMessage';
import Logo from '../../UI/Logo';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import SmallLoader from '../../UI/SmallLoader';
import FormCover from '../../UI/FormCover';
import BackgroundCover from '../../UI/BackgroundCover';
import FormLinks from '../../UI/FormLinks';
import useSignUp from './useSignUp';

import { loginBanner01 } from '../../Utils/GlobalConst';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,

    formState: { errors },
  } = useForm();
  const { signUp, isPending } = useSignUp();

  function onSubmit({ fullName, email, password }) {
    signUp({ fullName, email, password });
  }

  return (
    <>
      <Container>
        <div className=' flex shadow-xl h-screen justify-center items-center p-6'>
          <div className=' flex bg-White'>
            <div className=' flex flex-col gap-2  sm:p-12 md:p-16'>
              <div className=' flex flex-col gap-3 sm:w-[300px] '>
                <div className=' flex flex-col gap-3 md:gap-6'>
                  <Logo size='w-[120px]' />
                  <FormMessage
                    title={'Feast Mode 🤤'}
                    message={'Your Passport to Tasty Discoveries Starts Here!'}
                  />
                </div>
                <form
                  className=' flex flex-col gap-6 '
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className=' flex flex-col gap-3'>
                    <Input
                      title={'Full Name'}
                      id={'fullName'}
                      placeholder={'Your Full Name'}
                      register={register('fullName', {
                        required: 'This field is required',
                      })}
                      errors={errors}
                    />
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
                  <Button type={'login'}>
                    Sign Up {isPending && <SmallLoader showLoading={false} />}
                  </Button>
                </form>
              </div>
              <FormLinks form='signup' />
            </div>
            <FormCover loginBanner01={loginBanner01} />
          </div>
        </div>
      </Container>
      <BackgroundCover loginBanner01={loginBanner01} />
    </>
  );
}
