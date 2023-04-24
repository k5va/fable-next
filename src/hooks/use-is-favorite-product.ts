import { useQuery } from "react-query";
import { fetchIsFavoriteProduct } from "~/api";
import { LoadResult, FavoriteProduct } from "~/types";

export const useIsFavoriteProduct = (
  id: string
): LoadResult<FavoriteProduct> => {
  const { data, error, isLoading } = useQuery(["products", id], () =>
    fetchIsFavoriteProduct(id)
  );

  return { data, error, isLoading };
};
