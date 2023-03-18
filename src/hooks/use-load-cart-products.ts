import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchProducts } from "~/api";
import { LoadResult, Product } from "~/types";
import { useProductOrders } from "./use-product-orders";

export const useLoadCartProducts = (): LoadResult<Product[]> => {
  const { orders } = useProductOrders();
  const ids = orders.map(({ productId }) => productId);
  const { data, error, isLoading } = useQuery(["products", "all"], () =>
    fetchProducts(ids)
  );
  useErrorHandler(error);

  return { data, error, isLoading };
};
