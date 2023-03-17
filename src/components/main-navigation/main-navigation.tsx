import React from "react";
import { Logo, CatalogMenu, CartLink, ChangeLanguage } from "../../components";

export function MainNavigation(): JSX.Element {
  return (
    <nav className="flex flex-wrap items-start justify-between py-7 px-0">
      <div className="medium:hidden">
        <Logo />
      </div>
      <CatalogMenu />
      <div className="flex gap-9">
        <CartLink />
        <ChangeLanguage />
      </div>
    </nav>
  );
}
