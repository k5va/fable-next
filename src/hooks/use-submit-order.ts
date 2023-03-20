import { useOrders } from "~/store";
import { Order } from "~/types";
import { useCreateOrder } from "./use-create-order";

export const useSubmitOrder = () => {
  const orders = useOrders((state) => state.orders);
  const { create } = useCreateOrder();

  return (formData: Order) => {
    const fullOrder: Order = {
      ...formData,
      productOrders: orders,
    };

    console.log(fullOrder);
    create(fullOrder);
  };
};
