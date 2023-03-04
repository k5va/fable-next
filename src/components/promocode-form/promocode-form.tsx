import React from "react";
import { useTranslation } from "next-i18next";
import { TextField } from "../text-field/text-field";

export function PromocodeForm(): JSX.Element {
  const { t } = useTranslation();

  return (
    <form
      className="flex flex-nowrap justify-between gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <TextField
        placeholder={t("order.fields.promoCode.placeholder") || undefined}
        name="promoCode"
      />
      <button className="promocode-form__submit button" type="submit">
        {t("order.fields.promoCode.apply")}
      </button>
    </form>
  );
}
