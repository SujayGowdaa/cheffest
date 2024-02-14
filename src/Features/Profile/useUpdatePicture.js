import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePicture as updatePictureApi } from '../../services/apiAuth';
import { toast } from 'sonner';
import { useAppContext } from '../../store/AppContext';

export function useUpdatePicture() {
  const { setProfile } = useAppContext();
  const queryClient = useQueryClient();
  const { mutate: updatePicture, isPending } = useMutation({
    mutationFn: (avatar) => updatePictureApi(avatar),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
      toast.success('Profile picture updated');
      setProfile(null);
    },
    onError: () => toast.error('Please upload an image'),
  });
  return { updatePicture, isPending };
}
