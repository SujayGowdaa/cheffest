import { useMutation } from '@tanstack/react-query';
import { resetPassword as resetPasswordApi } from '../../services/apiAuth';

export default function useResetPassword() {
  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: (email) => resetPasswordApi(email),
    mutationKey: ['user'],
    onSuccess: () => {
      console.log('Please verify mail');
    },
  });
  return { resetPassword, isPending };
}
