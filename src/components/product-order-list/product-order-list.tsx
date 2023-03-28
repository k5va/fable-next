import React, { useContext } from "react";
import { ProductOrder } from "~/components";
import { OrderContext } from "~/pages/order";

export function ProductOrderList(): JSX.Element {
  const { productOrders } = useContext(OrderContext);

  return (
    <ul className="flex flex-col flex-nowrap gap-5">
      {productOrders.map((productOrder) => {
        return (
          <li key={productOrder.productId}>
            <ProductOrder productOrder={productOrder} />
          </li>
        );
      })}
    </ul>
  );
}
