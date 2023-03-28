import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchOrders } from "~/api";
import { LoadResult, Order, Sorting } from "~/types";

export const useLoadOrders = (sort: Sorting): LoadResult<Order[]> => {
  const { data, error, isLoading } = useQuery(["orders", sort], () =>
    fetchOrders(sort)
  );
  useErrorHandler(error);

  return { data, error, isLoading };
};
