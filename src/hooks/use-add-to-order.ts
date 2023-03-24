import { useOrders } from "~/store";
import { CreateProductOrder } from "../types";

export const useAddToOrder = () => {
  const addOrder = useOrders((state) => state.addOrder);
  return (productOrder: CreateProductOrder) => addOrder(productOrder);
};
