import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchProducts } from "~/api";
import { LoadResult, Product } from "../types";

export const useLoadProducts = (): LoadResult<Product[]> => {
  const { data, error, isLoading } = useQuery(
    ["products", "all"],
    fetchProducts
  );
  useErrorHandler(error);

  return { data, error, isLoading };
};
