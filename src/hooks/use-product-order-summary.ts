import { useOrders } from "~/store";

const DEFAULT_DELIVERY = 0;
const DEFAULT_PROMOCODE = 0;

export const useProductOrderSummary = () => {
  const orders = useOrders((state) => state.orders);

  const summary = orders.reduce(
    (accum, curr) => accum + curr.count * curr.product.price,
    0
  );
  const delivery = DEFAULT_DELIVERY;
  const promoCode = DEFAULT_PROMOCODE;
  const total = summary + delivery + promoCode;

  return { summary, delivery, promoCode, total };
};
