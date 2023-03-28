import React from "react";
import { Product } from "~/types";

type ProductBreadcrumbsProps = {
  product: Product;
};

export function ProductBreadcrumbs({
  product,
}: ProductBreadcrumbsProps): JSX.Element {
  return (
    <div className="flex flex-nowrap gap-4 text-xs">
      <p>{product.collection?.name}</p>
      <span>—</span>
      <p>{product.category?.name}</p>
    </div>
  );
}
