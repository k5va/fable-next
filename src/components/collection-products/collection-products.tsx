import React, { useContext } from "react";
import { CategoryProducts } from "../../components";
import { CollectionProductsProps } from "./types";
import { useFilterProductsByCollection } from "../../hooks";
import { HomePageContext } from "~/pages";

export function CollectionProducts({
  collection,
}: CollectionProductsProps): JSX.Element | null {
  const { categories, products } = useContext(HomePageContext);
  const collectionProducts = useFilterProductsByCollection(
    collection,
    products
  );

  return collectionProducts && collectionProducts.length > 0 ? (
    <div className="mb-12">
      <h3 className="text-center text-5xl uppercase small:text-3xl">
        {collection.name}
      </h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryProducts
              category={category}
              products={collectionProducts}
            />
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
