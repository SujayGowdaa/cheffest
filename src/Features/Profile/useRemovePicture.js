import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removePicture as removePictureApi } from '../../services/apiAuth';
import { useAppContext } from '../../store/AppContext';
import { placeHolderImage } from '../../Utils/GlobalConst';
import { toast } from 'sonner';

export function useRemovePicture() {
  const queryClient = useQueryClient();
  const { setAvatar } = useAppContext();
  const { mutate: removePicture, isPending } = useMutation({
    mutationFn: removePictureApi,
    onSuccess: ({ user }) => {
      setAvatar(placeHolderImage);
      queryClient.setQueryData(['user'], user);
      toast.success('Profile picture removed');
    },
    onError: () => toast.error('Profile picture cannot be removed'),
  });
  return { removePicture, isPending };
}
