import React from "react";
import { useTranslation } from "next-i18next";
import { TextField } from "../ui/text-field/text-field";
import { Button } from "~/components";

export function PromocodeForm(): JSX.Element {
  const { t } = useTranslation();

  return (
    <form
      className="
        grid grid-cols-[1fr,auto] gap-4 
        small:grid-cols-1"
      onSubmit={(e) => e.preventDefault()}
    >
      <TextField
        placeholder={t("order.fields.promoCode.placeholder") || undefined}
        name="promoCode"
      />
      <Button intent="secondary" width="full" type="submit">
        {t("order.fields.promoCode.apply")}
      </Button>
    </form>
  );
}
