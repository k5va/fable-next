import React from "react";
import { Container, MainNavigation } from "../../components";

export function Header(): JSX.Element {
  return (
    <header>
      <Container>
        <MainNavigation />
      </Container>
    </header>
  );
}
