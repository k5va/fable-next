import React from "react";
import { CategoryProducts, Spinner } from "../../components";
import { CollectionProductsProps } from "./types";
import {
  useFilterProductsByCollection,
  useLoadCategories,
  useLoadProducts,
} from "../../hooks";

export function CollectionProducts({
  collection,
}: CollectionProductsProps): JSX.Element | null {
  const { data: categories, isLoading: isCategoriesLoading } =
    useLoadCategories();
  const { data: products, isLoading: isProductsLoading } = useLoadProducts();
  const isLoading = isCategoriesLoading && isProductsLoading;
  const collectionProducts = useFilterProductsByCollection(
    collection,
    products
  );

  return collectionProducts && collectionProducts.length > 0 ? (
    <div className="mb-12">
      <h3 className="text-center text-5xl uppercase">{collection.name}</h3>
      {isLoading ? (
        <Spinner />
      ) : (
        categories && (
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
        )
      )}
    </div>
  ) : null;
}
