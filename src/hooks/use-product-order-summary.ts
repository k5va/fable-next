import { useContext } from "react";
import { OrderContext } from "~/pages/order";
import { useOrders } from "~/store";

const DEFAULT_DELIVERY = 0;
const DEFAULT_PROMOCODE = 0;

export const useProductOrderSummary = () => {
  const orders = useOrders((state) => state.orders);
  const { products } = useContext(OrderContext);

  const summary = orders.reduce((accum, { count, productId }) => {
    const product = products.find(({ id }) => id === productId);
    const price = product?.price ?? 0;

    return accum + count * price;
  }, 0);

  const delivery = DEFAULT_DELIVERY;
  const promoCode = DEFAULT_PROMOCODE;
  const total = summary + delivery + promoCode;

  return { summary, delivery, promoCode, total };
};
