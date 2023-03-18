import { useErrorHandler } from "react-error-boundary";
import { useMutation } from "react-query";
import { createOrder } from "~/api";
import { useOrders } from "~/store";

export const useCreateOrder = () => {
  const { removeAll: clearCart } = useOrders();

  const {
    mutate: create,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      clearCart();
    },
  });
  useErrorHandler(error);

  // TODO: invalidate query?

  return { create, isSuccess };
};
