import React from "react";
import { Container, SiteMenu, Socials, Subscribe } from "~/components";

export function Footer(): JSX.Element {
  return (
    <footer className="mt-auto bg-black py-8 px-0 text-xs text-white">
      <Container>
        <div
          className="
            flex flex-wrap justify-between 
            medium:flex-col medium:items-center"
        >
          <div
            className="
              flex flex-nowrap 
              medium:order-1 
              medium:w-[500px] medium:justify-between small:w-full 
              "
          >
            <div className="mr-20 medium:mr-14 small:mr-0">
              <SiteMenu />
            </div>
            <Socials />
          </div>
          <div className="w-[500px] medium:mb-4 small:mb-16 small:w-full">
            <Subscribe />
          </div>
        </div>
      </Container>
    </footer>
  );
}
