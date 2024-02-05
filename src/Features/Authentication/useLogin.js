import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const navigate = useNavigate();
  const {
    mutate: login,
    isLoading,
    isPending,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    mutationKey: ['user'],
    onSuccess: () => {
      navigate('/');
    },
    onError: (err) => alert(err.message),
  });

  return { login, isLoading, isPending };
}
