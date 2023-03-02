import React from "react";
import { useLoadCategoryById } from "../../hooks/use-load-category-by-id";
import { useLoadCollectionById } from "../../hooks/use-load-collection-by-id";
import { Spinner } from "../spinner/spinner";
import { ProductBreadcrumbsProps } from "./types";

export function ProductBreadcrumbs({
  product,
}: ProductBreadcrumbsProps): JSX.Element {
  const { data: collection, isLoading: isCollectionLoading } =
    useLoadCollectionById(product.collection);
  const { data: category, isLoading: isCategoryLoading } = useLoadCategoryById(
    product.category
  );
  const isLoading = isCategoryLoading && isCollectionLoading;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        collection &&
        category && (
          <p className="flex flex-nowrap gap-4 text-xs">
            <span>{collection.name}</span>
            <span>—</span>
            <span>{category.name}</span>
          </p>
        )
      )}
    </>
  );
}
