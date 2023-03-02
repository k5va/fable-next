import React from "react";
import { MainNavigation } from "../../components";

export function Header(): JSX.Element {
  return (
    <header>
      <div className="container">
        <MainNavigation />
      </div>
    </header>
  );
}
