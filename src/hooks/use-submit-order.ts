import { useOrders } from "~/store";
import { useCreateOrder } from "./use-create-order";
import { CreateOrder } from "~/types";

export const useSubmitOrder = () => {
  const orders = useOrders((state) => state.orders);
  const { create } = useCreateOrder();

  return (formData: CreateOrder) => {
    const fullOrder: CreateOrder = {
      ...formData,
      productOrders: orders,
    };

    console.log(fullOrder);
    create(fullOrder);
  };
};
