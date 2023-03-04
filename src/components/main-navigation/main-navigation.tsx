import React from "react";
import { Logo, CatalogMenu, CartLink, ChangeLanguage } from "../../components";

export function MainNavigation(): JSX.Element {
  return (
    <nav className="flex flex-wrap justify-between py-7 px-0 uppercase">
      <div className="main-nav__logo">
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