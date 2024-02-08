import { useMutation } from '@tanstack/react-query';
import { updatePassword as updatePasswordApi } from '../../services/apiAuth';
import { toast } from 'sonner';

export default function useUpdatePassword() {
  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: (newPassword) => updatePasswordApi(newPassword),
    mutationKey: ['user'],
    onSuccess: () => {
      toast.success('Password updated successfully', {
        position: 'bottom-right',
      });
    },
    onError: (err) =>
      toast.error(err.message, {
        position: 'bottom-right',
      }),
  });

  return { updatePassword, isPending };
}
