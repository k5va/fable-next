import React from "react";
import { ProductCard } from "../../components";
import { CategoryProductsProps } from "./types";
import { useFilterProductsByCategory } from "../../hooks";

export function CategoryProducts({
  category,
  products,
}: CategoryProductsProps): JSX.Element | null {
  const categoryProducts = useFilterProductsByCategory(category, products);

  return categoryProducts.length > 0 ? (
    <div className="mb-12">
      <h4 className="mb-6 text-2xl small:text-sm">{category.name}</h4>
      <ul
        className="
        grid grid-cols-3 gap-y-10 gap-x-5
        small:grid-cols-2 small:gap-y-6 small:gap-x-5"
      >
        {categoryProducts.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
