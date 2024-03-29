import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchProducts } from "~/api";
import { LoadResult, Product } from "~/types";

export const useLoadProducts = (ids: string[] = []): LoadResult<Product[]> => {
  const { data, error, isLoading } = useQuery(["products", "all"], () =>
    fetchProducts(ids)
  );
  useErrorHandler(error);

  return { data, error, isLoading };
};
