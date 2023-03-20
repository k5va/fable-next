import React from "react";
import { ProductOrder } from "~/components";
import { useProductOrders } from "~/hooks";

export function ProductOrderList(): JSX.Element {
  const { orders } = useProductOrders();

  return (
    <ul className="flex flex-col flex-nowrap gap-5">
      {orders.map((order) => (
        <li key={order.productId}>
          <ProductOrder order={order} />
        </li>
      ))}
    </ul>
  );
}
