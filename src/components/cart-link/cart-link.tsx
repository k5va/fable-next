import React from "react";
import Link from "next/link";
import { useOrders } from "~/store";
import { AppRoute } from "~/const";
import { BiCart, BiCartAdd } from "react-icons/bi";

export function CartLink(): JSX.Element {
  const ordersCount = useOrders((state) => state.orders.length);

  return (
    <Link
      className="
        flex items-center gap-1 
        hover:animate-scale
      "
      href={AppRoute.ORDER}
    >
      {ordersCount > 0 ? (
        <>
          <BiCartAdd className="text-2xl" /> ({ordersCount})
        </>
      ) : (
        <BiCart className="text-2xl" />
      )}
    </Link>
  );
}
