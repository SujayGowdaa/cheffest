/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import Container from '../../../ui/Container';
import Button from '../../../ui/Button';
import BackgroundCover from './BackgroundCover';
import Input from './Input';
import CoverImage from './CoverImage';
import WelcomeMessage from './WelcomeMessage';
import Logo from '../../../UI/Logo';
import { useForm } from 'react-hook-form';
import { useLogin } from '../useLogin';
import SmallLoader from '../../../UI/SmallLoader';

const loginBanner01 =
  'https://yyfjumfmwgnvczjziqao.supabase.co/storage/v1/object/public/banners/loginBanner01.jpg?t=2024-02-03T16%3A53%3A20.429Z';

const loginBanner02 =
  'https://yyfjumfmwgnvczjziqao.supabase.co/storage/v1/object/public/banners/loginBanner02.jpg?t=2024-02-03T16%3A53%3A15.277Z';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm({
    defaultValues: {
      email: 'sujaygowda@cheffest.com',
      password: 'cheffest',
    },
  });
  const { login, isPending: isLogging } = useLogin();

  function onSubmit(data) {
    login(data);
  }

  return (
    <>
      <Container>
        <div className=' flex shadow-xl h-screen justify-center items-center'>
          <div className=' flex '>
            <div className=' px-20 py-24 bg-White flex flex-col gap-12 min-w-[450px] box-content'>
              <div className=' flex flex-col gap-6'>
                <Logo size='w-[140px]' />
                <WelcomeMessage />
              </div>
              <form
                className=' flex flex-col gap-12 '
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className=' flex flex-col gap-6'>
                  <Input
                    title={'Email Address'}
                    id={'email'}
                    placeholder={'Enter email address'}
                    register={register('email', {
                      required: 'This field is required',
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
                        value: 8,
                        message: 'Should be atleast 5 characters',
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
            <CoverImage loginBanner01={loginBanner01} />
          </div>
        </div>
      </Container>
      <BackgroundCover loginBanner01={loginBanner01} />
    </>
  );
};

export default Login;
