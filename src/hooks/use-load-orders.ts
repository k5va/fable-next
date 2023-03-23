import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchOrders } from "~/api";
import { LoadResult, Order } from "~/types";

export const useLoadOrders = (): LoadResult<Order[]> => {
  const { data, error, isLoading } = useQuery(["orders"], () => fetchOrders());
  useErrorHandler(error);

  return { data, error, isLoading };
};
