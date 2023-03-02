import React from "react";
import { SiteMenu, Socials, Subscribe } from "../../components";

export function Footer(): JSX.Element {
  return (
    <footer className="mt-auto bg-black py-8 px-0 text-xs text-white">
      <div className="container flex flex-wrap justify-between">
        <div className="flex flex-nowrap">
          <div className="mr-20">
            <SiteMenu />
          </div>
          <Socials />
        </div>
        <Subscribe />
      </div>
    </footer>
  );
}
