import React, { useContext } from "react";
import { HomePageContext } from "~/pages";
import { CollectionProducts, Container, SortingSelect } from "../../components";

export function Collections(): JSX.Element {
  const { collections } = useContext(HomePageContext);

  return (
    <Container>
      <section className="relative mb-20">
        <h2 className="sr-only">Fable store collections</h2>
        <SortingSelect />
        <ul>
          {collections.map((collection) => (
            <li key={collection.id}>
              <CollectionProducts collection={collection} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
