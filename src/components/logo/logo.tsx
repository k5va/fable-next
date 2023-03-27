import React from "react";
import { useTranslation } from "next-i18next";
import LogoSVG from "./logo.svg";
import { AppRoute } from "../../const";
import Link from "next/link";

export function Logo(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Link href={AppRoute.ROOT}>
      <LogoSVG
        title={t("fable") || "Fable store"}
        className="hover:animate-scale"
      />
    </Link>
  );
}
