import React, { useContext } from "react";
import { ProductPageContext } from "~/pages/product/[id]";

export function ProductBreadcrumbs(): JSX.Element {
  const { collection, category } = useContext(ProductPageContext);

  return (
    <>
      {collection && category && (
        <p className="flex flex-nowrap gap-4 text-xs">
          <span>{collection.name}</span>
          <span>—</span>
          <span>{category.name}</span>
        </p>
      )}
    </>
  );
}
