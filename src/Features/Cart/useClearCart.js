import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem as deleteItemApi } from "../../services/apiMeals";

export function useDeleteItem() {
  const queryClient = useQueryClient();

  const { mutate: deleteItem, isPending } = useMutation({
    mutationFn: (id) => deleteItemApi(id),
    mutationKey: ["cart"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  return { deleteItem, isPending };
}
