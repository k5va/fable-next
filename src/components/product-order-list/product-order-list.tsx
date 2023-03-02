import React from "react";
import { ProductOrder, Spinner } from "../../components";
import { useLoadCollections, useProductOrders } from "../../hooks";

export function ProductOrderList(): JSX.Element {
  const { orders } = useProductOrders();
  const { isLoading } = useLoadCollections();

  return (
    <ul className="flex flex-col flex-nowrap gap-5">
      {isLoading ? (
        <Spinner />
      ) : (
        orders.map((order) => (
          <li key={order.product.id}>
            <ProductOrder order={order} />
          </li>
        ))
      )}
    </ul>
  );
}
