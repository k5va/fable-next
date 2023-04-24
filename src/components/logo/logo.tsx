import React from "react";
import { useTranslation } from "next-i18next";
import LogoSVG from "./logo.svg";
import { AppRoute } from "../../const";
import Link from "next/link";
import { motion } from "framer-motion";

export function Logo(): JSX.Element {
  const { t } = useTranslation();

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }}>
      <Link href={AppRoute.ROOT}>
        <LogoSVG title={t("fable") || "Fable store"} />
      </Link>
    </motion.div>
  );
}
