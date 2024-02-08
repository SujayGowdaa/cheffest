import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout } = useMutation({
    mutationFn: logoutApi,
    mutationKey: ['user'],
    onSuccess: () => {
      navigate('/login', { replace: true });
      toast.success('Logout successful', {
        position: 'bottom-right',
      });
      queryClient.clear();
    },
    onError: (err) =>
      toast.error(err.message, {
        position: 'bottom-right',
      }),
  });

  return { logout };
}
