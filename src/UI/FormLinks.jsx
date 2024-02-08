/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom';

export default function FormLinks({ form }) {
  const navigate = useNavigate();

  if (form === 'login')
    return (
      <div className=' text-Grey flex flex-col gap-1'>
        <p>
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/sign-up')}
            className=' font-semibold text-blue-500 hover:underline cursor-pointer ml-1'
          >
            Sign Up
          </span>
        </p>
        <p
          className=' hover:underline hover:text-MediumGrey'
          onClick={() => navigate('/reset-password')}
        >
          Forgot Your Password?
        </p>
      </div>
    );

  if (form === 'signup' || form === 'reset')
    return (
      <div className=' text-Grey flex flex-col gap-1'>
        <p>
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className=' font-semibold text-blue-500 hover:underline cursor- ml-1'
          >
            Sign In
          </span>
        </p>
      </div>
    );
}
