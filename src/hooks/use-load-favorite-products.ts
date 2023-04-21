import { useQuery } from "react-query";
import { fetchFavoriteProducts } from "~/api";
import { LoadResult, Product } from "~/types";

export const useLoadFavoriteProducts = (): LoadResult<Product[]> => {
  const { data, error, isLoading } = useQuery({
    queryFn: fetchFavoriteProducts,
    queryKey: ["favorites"],
  });

  return { data, error, isLoading };
};
