import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCart as clearCartApi } from "../../services/apiMeals";

export function useClearCart() {
  const queryClient = useQueryClient();

  const { mutate: clearCart, isPending } = useMutation({
    mutationFn: clearCartApi,
    mutationKey: ["cart"],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  return { clearCart, isPending };
}
