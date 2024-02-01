import { useQuery } from "@tanstack/react-query";
import { getMeals } from "../../services/apiMeals";
import { useSearchParams } from "react-router-dom";

export function useMeals() {
  const [searchParams] = useSearchParams();

  const filterRange = searchParams.get("price");
  const filterRangeObj = !filterRange
    ? null
    : {
        field: "price",
        value: filterRange,
      };

  const filterRating = searchParams.get("rating");
  const filterRatingObj = !filterRating
    ? null
    : { field: "rating", value: filterRating };

  const filterType = searchParams.get("type");
  const filterTypeObj = !filterType
    ? null
    : {
        field: "type",
        value: filterType,
      };

  const filterSortBy = searchParams.get("sort-by");
  const filterSortByObj = !filterSortBy
    ? null
    : {
        field: "sort-by",
        value: filterSortBy,
      };

  const { data: mealItems, isLoading } = useQuery({
    queryKey: [
      "mealItems",
      filterRatingObj,
      filterTypeObj,
      filterSortByObj,
      filterRangeObj,
    ],
    queryFn: () =>
      getMeals({
        filterRatingObj,
        filterTypeObj,
        filterSortByObj,
        filterRangeObj,
      }),
  });

  return { mealItems, isLoading };
}
