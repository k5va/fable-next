import React from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { AppLanguage } from "~/const";

export function ChangeLanguage(): JSX.Element {
  const { t, i18n } = useTranslation();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
      className="flex cursor-pointer border-none bg-transparent font-medium uppercase"
      onClick={() =>
        i18n.changeLanguage(
          i18n.language === AppLanguage.ENG ? AppLanguage.RUS : AppLanguage.ENG
        )
      }
    >
      {t("header.language")}
    </motion.button>
  );
}
