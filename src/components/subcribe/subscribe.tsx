import React from "react";
import { useTranslation } from "next-i18next";
import { Button, TextField } from "~/components";

export function Subscribe(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <p className="mb-3">{t("footer.subscribe.discount")}</p>
      <form className="grid grid-cols-[2fr,1fr] gap-x-4 small:grid-cols-1">
        <div className="small:mb-4">
          <TextField
            intent="secondary"
            type="email"
            name="email"
            placeholder={t("footer.subscribe.emailPlaceholder") || ""}
          />
        </div>
        <Button width="full" type="submit">
          {t("footer.subscribe.subscribe")}
        </Button>
      </form>
    </div>
  );
}
