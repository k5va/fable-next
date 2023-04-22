import { useQuery } from "react-query";
import { fetchFavoriteProducts } from "~/api";
import { LoadResult, ProductList } from "~/types";

export const useLoadFavoriteProducts = (
  page: number,
  count: number
): LoadResult<ProductList> => {
  const { data, error, isLoading } = useQuery({
    queryFn: () => fetchFavoriteProducts({ page, count }),
    queryKey: ["favorites", page],
  });

  return { data, error, isLoading };
};
