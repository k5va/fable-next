import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchProduct } from "~/api";
import { LoadResult, Product } from "../types";

export const useLoadProductById = (id: string): LoadResult<Product> => {
  const { data, error, isLoading } = useQuery(["products", id], () =>
    fetchProduct(id)
  );
  useErrorHandler(error);

  return { data, error, isLoading };
};
