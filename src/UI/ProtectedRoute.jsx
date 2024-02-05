import { useNavigate } from 'react-router-dom';
import useUser from '../Features/Authentication/useUser';
import LoadingScreen from './LoadingScreen';
import { useEffect } from 'react';

/* eslint-disable react/prop-types */
export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, fetchStatus } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading && fetchStatus === 'idle')
      navigate('/login');
  }, [isLoading, isAuthenticated, navigate, fetchStatus]);

  if (isLoading) return <LoadingScreen />;
  if (isAuthenticated) return <>{children}</>;
}
