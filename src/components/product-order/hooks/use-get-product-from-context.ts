import { useContext } from "react";
import { OrderContext } from "~/pages/order";

export const useGetProductFromContext = (productId: string) => {
  const { products } = useContext(OrderContext);
  return products.find(({ id }) => id === productId);
};
