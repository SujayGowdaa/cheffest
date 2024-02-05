import { useMutation } from '@tanstack/react-query';
import { logout as logoutApi } from '../../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    mutationKey: ['user'],
    onSuccess: () => {
      navigate('/login');
      console.log('logout sucessfull');
    },
    onError: () => console.log('error logging out'),
  });

  return { logout };
}
