import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { menuRoutes } from "./site-menu.routes";

export function SiteMenu(): JSX.Element {
  const { t } = useTranslation();

  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-20 text-inherit">
      {menuRoutes.map(({ link, text }, index) => (
        <li key={index}>
          <Link href={link}>{t(text)}</Link>
        </li>
      ))}
    </ul>
  );
}
