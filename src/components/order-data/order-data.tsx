import dayjs from "dayjs";
import React from "react";
import { Order } from "~/types";

type OrderDataProps = {
  order: Order;
};

export const OrderData = ({ order }: OrderDataProps): JSX.Element => {
  return (
    <div className="grid grid-cols-[auto,1fr] grid-rows-[repeat(4,auto),1fr] gap-2">
      <p>Дата заказа:</p>
      <p>{dayjs(order.createdAt).format("YYYY-MM-DD HH:MM")}</p>
      <p>Phone:</p>
      <p>{order.phone}</p>
      <p>Address:</p>
      <p>{order.address}</p>
      <p>Delivery:</p>
      <p>{order.delivery}</p>
      <p>Payment:</p>
      <p>{order.payment}</p>
    </div>
  );
};
