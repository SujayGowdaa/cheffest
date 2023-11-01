import logo from '../../assets//images/logo/cheffest.png';
import loginBanner01 from '../../assets//images/banners/loginBanner01.jpg';
// eslint-disable-next-line no-unused-vars
import loginBanner02 from '../../assets//images/banners/loginBanner02.jpg';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useState } from 'react';

const Login = () => {
  const [isEmailValid, setEmailValid] = useState();
  const [isPasswordValid, setPasswordValid] = useState();
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  let inputInValid = ' outline outline-1 outline-Red ease-out duration-300  ';
  let inputValid = ' outline outline-1 outline-Green ease-out duration-300  ';

  return (
    <div className='h-[100vh] flex items-center '>
      <div className='absolute z-[-1] overflow-hidden'>
        <img
          src={loginBanner01}
          alt=''
          className='object-cover h-[100vh] w-[100vw] brightness-50 contrast-[0.9] blur-sm  scale-[1.02] '
        />
      </div>
      <Container>
        <div className=' flex shadow-xl  bg-white '>
          <div className=' px-20 p-28 min-w-[580px] self-center'>
            <img
              className=' w-[200px] h-auto pb-10'
              src={logo}
              alt='cheffest fast food and grill'
            />
            <h1 className=' text-Black font-OpenSans text-4xl tracking-tight font-bold uppercase mb-1'>
              Welcome Back
            </h1>
            <p className=' text-MediumGrey  font-QuickSand font-semibold text-md pb-8 '>
              Sign in with your Email Address and Password
            </p>
            <form className=' flex flex-col gap-6 '>
              <div className=' flex flex-col gap-2  '>
                <div className=' flex items-center justify-between '>
                  <label
                    className=' font-QuickSand font-bold text-md'
                    htmlFor='email'
                  >
                    Email Address
                  </label>
                  {isEmailValid === false && (
                    <p className={` text-xs text-Red `}>
                      {` Please include an "@" in the email address`}
                    </p>
                  )}
                </div>
                <input
                  className={`placeholder:text-sm focus:border-none focus:outline-none p-3 font-QuickSand font-semibold bg-slate-100  placeholder:text-slate-300 ${
                    isEmailValid === true && inputValid
                  } ${isEmailValid === false && inputInValid} `}
                  type='email'
                  id='email'
                  placeholder='Enter email address'
                  value={userInput.email}
                  onChange={(e) => {
                    setUserInput((prevState) => {
                      return {
                        ...prevState,
                        email: e.target.value,
                      };
                    });
                  }}
                  onBlur={(e) => {
                    if (
                      e.target.value.trim().length >= 1 &&
                      e.target.value.trim().includes('@')
                    ) {
                      setEmailValid(true);
                    } else {
                      setEmailValid(false);
                    }
                  }}
                />
              </div>
              <div className=' flex flex-col gap-2'>
                <div className=' flex items-center justify-between '>
                  <label
                    className=' font-QuickSand font-bold text-md'
                    htmlFor='password'
                  >
                    Password
                  </label>
                  {isPasswordValid === false && (
                    <span className={` text-xs text-Red `}>
                      Please enter atleast 6 characters
                    </span>
                  )}
                </div>
                <input
                  className={`placeholder:text-sm focus:border-none focus:outline-none  p-3 font-QuickSand font-semibold bg-slate-100  placeholder:text-slate-300  ${
                    isPasswordValid === true && inputValid
                  } ${isPasswordValid === false && inputInValid}  `}
                  type='password'
                  id='password'
                  placeholder='Enter password'
                  value={userInput.password}
                  onChange={(e) => {
                    setUserInput((prevState) => {
                      return {
                        ...prevState,
                        password: e.target.value,
                      };
                    });
                  }}
                  onBlur={(e) => {
                    if (e.target.value.trim().length >= 6) {
                      setPasswordValid(true);
                    } else {
                      setPasswordValid(false);
                    }
                  }}
                />
              </div>
              <Button
                className='bg-Green text-cyan-50 text-md font-QuickSand font-semibold max-w-max  px-auto py-3 mt-4  w-full'
                btnName='Sign In'
                type='submit'
                onClick={() => {
                  if (isEmailValid === true && isPasswordValid === true) {
                    console.log(userInput, 'submitted');
                  } else {
                    setEmailValid(false);
                    setPasswordValid(false);
                    return;
                  }
                }}
              />
            </form>
          </div>
          <div className=' w-[100%] overflow-hidden'>
            <img
              className=' object-cover h-full w-full  '
              src={loginBanner01}
              alt='tasty dish'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
