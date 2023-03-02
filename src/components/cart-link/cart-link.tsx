import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { useOrders } from "~/store";
import { AppRoute } from "../../const";

export function CartLink(): JSX.Element {
  const { t } = useTranslation();
  const ordersCount = useOrders((state) => state.orders.length);

  return (
    <Link href={AppRoute.ORDER}>
      {t("header.items")}
      {ordersCount > 0 && ` (${ordersCount})`}
    </Link>
  );
}
