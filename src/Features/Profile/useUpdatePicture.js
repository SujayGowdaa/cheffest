import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePicture as updatePictureApi } from '../../services/apiAuth';
import { toast } from 'sonner';

export function useUpdatePicture() {
  const queryClient = useQueryClient();
  const { mutate: updatePicture, isPending } = useMutation({
    mutationFn: (avatar) => updatePictureApi(avatar),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
      toast.success('Profile picture updated');
    },
    onError: () => toast.error('Profile picture cannot be updated'),
  });
  return { updatePicture, isPending };
}
