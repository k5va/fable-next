import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import { menuRoutes } from "./site-menu.routes";

export function SiteMenu(): JSX.Element {
  const { t } = useTranslation();

  return (
    <ul
      className="
          grid grid-cols-2 gap-3 text-inherit 
          medium:gap-y-3 medium:gap-x-2"
    >
      {menuRoutes.map(({ link, text }, index) => (
        <li key={index}>
          <Link href={link}>{t(text)}</Link>
        </li>
      ))}
    </ul>
  );
}
