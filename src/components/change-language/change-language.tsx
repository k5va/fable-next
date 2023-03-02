import React from "react";
import { useTranslation } from "react-i18next";
import { AppLanguage } from "../../const";

export function ChangeLanguage(): JSX.Element {
  const { t, i18n } = useTranslation();

  return (
    <button
      className="flex cursor-pointer border-none bg-transparent"
      onClick={() =>
        i18n.changeLanguage(
          i18n.language === AppLanguage.ENG ? AppLanguage.RUS : AppLanguage.ENG
        )
      }
    >
      {t("header.language")}
    </button>
  );
}
