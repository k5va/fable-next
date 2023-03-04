import React from "react";
import { useTranslation } from "next-i18next";
import { TextField } from "../../components";

export function Subscribe(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="w-[500px]">
      <p className="mb-3">{t("footer.subscribe.discount")}</p>
      <form className="flex flex-nowrap gap-x-4">
        <TextField
          type="email"
          name="email"
          placeholder={t("footer.subscribe.emailPlaceholder") || ""}
        />
        <button className="" type="submit">
          {t("footer.subscribe.subscribe")}
        </button>
      </form>
    </div>
  );
}
