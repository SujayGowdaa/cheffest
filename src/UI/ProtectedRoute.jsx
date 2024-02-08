import { useNavigate } from 'react-router-dom';
import { useUser } from '../Features/Authentication/useUser';
import LoadingScreen from './LoadingScreen';
import { useEffect } from 'react';
import { useAppContext } from '../store/AppContext';

/* eslint-disable react/prop-types */
export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, fetchStatus, user } = useUser();
  const { setUserName, avatar, setAvatar } = useAppContext();

  useEffect(() => {
    setAvatar((ps) => {
      return user?.user_metadata?.image || ps;
    });

    setUserName(user?.user_metadata?.fullName || 'unknown');
    if (!isAuthenticated && !isLoading && fetchStatus === 'idle')
      navigate('/login');
  }, [
    isLoading,
    isAuthenticated,
    navigate,
    fetchStatus,
    user,
    setUserName,
    setAvatar,
    avatar,
  ]);

  if (isLoading) return <LoadingScreen />;
  if (isAuthenticated) return <>{children}</>;
}
