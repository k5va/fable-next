import React from "react";
import Link from "next/link";
import { useOrders } from "~/store";
import { AppRoute } from "~/const";
import { BiCart, BiCartAdd } from "react-icons/bi";
import { motion } from "framer-motion";

export function CartLink(): JSX.Element {
  const ordersCount = useOrders((state) => state.orders.length);

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
      <Link className="flex items-center gap-1" href={AppRoute.ORDER}>
        {ordersCount > 0 ? (
          <>
            <BiCartAdd className="text-2xl" /> ({ordersCount})
          </>
        ) : (
          <BiCart className="text-2xl" />
        )}
      </Link>
    </motion.div>
  );
}
