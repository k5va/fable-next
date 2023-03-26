import dayjs from "dayjs";
import React, { useState } from "react";
import { useLoadOrders } from "~/hooks";
import { ProductOrder, Spinner } from "~/components";
import { Sorting } from "~/types";
import * as Select from "@radix-ui/react-select";

export const OrderList = (): JSX.Element => {
  const [sorting, setSorting] = useState<Sorting>("desc");
  const { data: orders = [], isLoading } = useLoadOrders(sorting);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Select.Root
        value={sorting}
        onValueChange={(value: Sorting) => setSorting(value)}
      >
        <Select.Trigger aria-label="sorting">
          <Select.Value placeholder="Select sorting…" />
          <Select.Icon></Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Viewport>
              <Select.Item value="desc">
                <Select.ItemText>desc</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
              <Select.Item value="asc">
                <Select.ItemText>asc</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      <ul className="flex flex-col gap-4">
        {orders.map(
          ({
            id,
            createdAt,
            phone,
            address,
            delivery,
            payment,
            productOrders,
          }) => (
            <li
              key={id}
              className="
            grid grid-cols-[1fr,2fr] gap-2 border-b-2 pb-4 
            small:grid-cols-1"
            >
              <div className="grid grid-cols-[auto,1fr] grid-rows-[repeat(4,auto),1fr] gap-2">
                <p>Дата заказа:</p>
                <p>{dayjs(createdAt).format("YYYY-MM-DD HH:MM")}</p>
                <p>Phone:</p>
                <p>{phone}</p>
                <p>Address:</p>
                <p>{address}</p>
                <p>Delivery:</p>
                <p>{delivery}</p>
                <p>Payment:</p>
                <p>{payment}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {productOrders.map((productOrder) => (
                  <li key={productOrder.productId}>
                    <ProductOrder productOrder={productOrder} readonly />
                  </li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
