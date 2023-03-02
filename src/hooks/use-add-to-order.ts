import { useOrders } from "~/store";
import { ProductOrder } from "../types";

export const useAddToOrder = () => {
  const addOrder = useOrders((state) => state.addOrder);
  return (productOrder: ProductOrder) => addOrder(productOrder);
};
