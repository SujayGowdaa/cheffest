import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiMeals";

export function useCart() {
  const { data, isPending } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return { data, isPending };
}
