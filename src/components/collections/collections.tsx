import React from "react";
import { CollectionProducts, SortingSelect, Spinner } from "../../components";
import { useLoadCollections } from "../../hooks";

export function Collections(): JSX.Element {
  const { data: collections, isLoading } = useLoadCollections();

  return (
    <section className="container relative mb-20">
      <h2 className="sr-only">Fable store collections</h2>
      <SortingSelect />

      {isLoading ? (
        <Spinner />
      ) : (
        collections && (
          <ul>
            {collections.map((collection) => (
              <li key={collection.id}>
                <CollectionProducts collection={collection} />
              </li>
            ))}
          </ul>
        )
      )}
    </section>
  );
}
