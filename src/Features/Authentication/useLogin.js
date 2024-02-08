import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

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
      toast.success('Login successful', {
        position: 'bottom-right',
      });
    },
    onError: (err) =>
      toast.error(err.message, {
        position: 'bottom-right',
      }),
  });

  return { login, isLoading, isPending };
}
