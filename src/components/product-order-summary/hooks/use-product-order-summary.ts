import { useContext } from "react";
import { OrderContext } from "~/pages/order";

const DEFAULT_DELIVERY = 0;
const DEFAULT_PROMOCODE = 0;

export const useProductOrderSummary = () => {
  const { productOrders } = useContext(OrderContext);

  const summary = productOrders.reduce(
    (accum, { count, product }) => accum + count * product.price,
    0
  );

  const delivery = DEFAULT_DELIVERY;
  const promoCode = DEFAULT_PROMOCODE;
  const total = summary + delivery + promoCode;

  return { summary, delivery, promoCode, total };
};
