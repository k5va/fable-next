import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { AppRoute } from "../../const";
import { menuRoutes } from "./catalog-menu.routes";

export function CatalogMenu(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Link href={AppRoute.ROOT} className="hidden">
        {t("header.menu.catalogue")}
      </Link>
      <ul className="flex flex-wrap gap-9">
        {menuRoutes.map(({ link, text }, index) => (
          <li key={index}>
            <Link href={link}>{t(text)}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
