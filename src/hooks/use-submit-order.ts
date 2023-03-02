import { useOrders } from "~/store";
import { OrderFormFields } from "../components/order-form/types";

export const useSubmitOrder = () => {
  const orders = useOrders((state) => state.orders);

  return (formData: OrderFormFields) => {
    const fullOrder = {
      ...formData,
      orders: orders.map(({ product, color, size, count }) => ({
        productId: product.id,
        color,
        size,
        count,
      })),
    };

    console.log(fullOrder);
  };
};
