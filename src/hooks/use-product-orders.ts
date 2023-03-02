import { useOrders } from "~/store";

export const useProductOrders = () => {
  const [orders, removeOrder, incrementProductCount, decrementProductCount] =
    useOrders((state) => [
      state.orders,
      state.removeOrder,
      state.incrementProductCount,
      state.decrementProductCount,
    ]);

  return {
    orders,
    removeProduct: (id: string) => removeOrder(id),
    incrementProduct: (id: string) => incrementProductCount(id),
    decrementProduct: (id: string) => decrementProductCount(id),
  };
};
