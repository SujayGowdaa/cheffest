/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import BackgroundCover from '../../UI/BackgroundCover';
import ContainerUI from '../../UI/ContainerUI';
import Input from '../../UI/Input';
import Logo from '../../UI/Logo';
import SmallLoader from '../../UI/SmallLoader';
import Button from '../../UI/Button';
import FormCover from '../../UI/FormCover';
import FormMessage from '../../UI/FormMessage';
import FormLinks from '../../UI/FormLinks';

import { useForm } from 'react-hook-form';
import { useLogin } from './useLogin';
import { loginBanner02 } from '../../Utils/GlobalConst';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'sujay@cheffest.com',
      password: '111111',
    },
  });
  const { login, isPending: isLogging } = useLogin();

  function onSubmit(data) {
    login(data, {
      onError: () => {
        reset({
          email: '',
          password: '',
        });
      },
    });
  }

  return (
    <>
      <ContainerUI>
        <div className=' flex shadow-xl h-screen justify-center items-center  p-6 lg:p-24 '>
          <div className=' flex bg-White lg:max-w-[1000px] '>
            <div className=' flex flex-col gap-2 sm:p-12  md:p-16 '>
              <div className=' flex flex-col gap-3 sm:w-[300px] md:gap-4'>
                <div className=' flex flex-col gap-3'>
                  <Logo size='w-[120px]' />
                  <FormMessage
                    title={'Savor the Moment'}
                    message={
                      'Sign in now to continue your culinary journey with us'
                    }
                  />
                </div>
                <form
                  className=' flex flex-col gap-6 '
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className=' flex flex-col gap-3 md:gap-4'>
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
                          message: 'Should contain atleast 6 characters',
                        },
                      })}
                      errors={errors}
                    />
                  </div>
                  <Button type={'login'}>
                    Sign In {isLogging && <SmallLoader showLoading={false} />}
                  </Button>
                </form>
              </div>
              <FormLinks form='login' />
            </div>
            <FormCover loginBanner01={loginBanner02} />
          </div>
        </div>
      </ContainerUI>
      <BackgroundCover loginBanner01={loginBanner02} />
    </>
  );
};

export default Login;
