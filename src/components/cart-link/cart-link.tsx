import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
// import { getOrders } from "../../store";

export function CartLink(): JSX.Element {
  const { t } = useTranslation();
  const ordersCount = 0;
  // const ordersCount = useSelector(getOrders).length;

  return (
    <Link href={AppRoute.ORDER}>
      {t("header.items")}
      {ordersCount > 0 && ` (${ordersCount})`}
    </Link>
  );
}
