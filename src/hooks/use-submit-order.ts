import { useOrders } from "~/store";
import { OrderFormFields } from "../components/order-form/types";
import { useCreateOrder } from "./use-create-order";

export const useSubmitOrder = () => {
  const orders = useOrders((state) => state.orders);
  const { create } = useCreateOrder();

  return (formData: OrderFormFields) => {
    const fullOrder = {
      ...formData,
      orders,
    };

    console.log(fullOrder);
    create(orders);
  };
};
