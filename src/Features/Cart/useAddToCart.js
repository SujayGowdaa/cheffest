import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItem as addItemApi } from "../../services/apiMeals";

export function useAddToCart() {
  const queryClient = useQueryClient();

  const { mutate: addItem, isPending } = useMutation({
    mutationFn: (newItem) => addItemApi(newItem),
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
    onError: (err) => alert(err.message),
  });

  return { addItem, isPending };
}