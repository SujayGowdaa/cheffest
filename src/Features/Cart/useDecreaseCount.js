import { useMutation, useQueryClient } from "@tanstack/react-query";
import { decreaseItem as decreaseItemApi } from "../../services/apiMeals";

export function useDecreaseCount() {
  const queryClient = useQueryClient();

  const { mutate: decreaseItem, isPending } = useMutation({
    mutationFn: (item) => decreaseItemApi(item),
    mutationKey: ["cart"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  return { decreaseItem, isPending };
}
