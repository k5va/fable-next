import { useAddToOrder } from "~/hooks";
import { useOrders } from "~/store";

export const useAddToCart = (productId: string) => {
  const addToCart = useAddToOrder();

  // TODO: useCallback?
  const isAddedToCart = Boolean(
    useOrders((state) => {
      return state.orders.find(({ product }) => product.id === productId);
    })
  );

  return [isAddedToCart, addToCart] as const;
};
