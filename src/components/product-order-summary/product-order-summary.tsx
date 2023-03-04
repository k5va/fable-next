import React from "react";
import { useTranslation } from "next-i18next";
import { useProductOrderSummary } from "../../hooks";

export function ProductOrderSummary(): JSX.Element {
  const { t } = useTranslation();
  const { summary, delivery, promoCode, total } = useProductOrderSummary();

  return (
    <div className="flex flex-col gap-2">
      <p className="flex flex-nowrap justify-between text-xs">
        {t("order.fields.price.summary")}: <span>{summary}</span>
      </p>
      <p className="flex flex-nowrap justify-between text-xs">
        {t("order.fields.price.delivery")}: <span>{delivery}</span>
      </p>
      <p className="flex flex-nowrap justify-between text-xs">
        {t("order.fields.price.promocode")}: <span>{promoCode}</span>
      </p>
      <p className="mt-5 flex flex-nowrap justify-between text-xl font-medium">
        {t("order.fields.price.total")}: <span>{total}</span>
      </p>
    </div>
  );
}
