import React from "react";
import { useLoadFavoriteProducts } from "~/hooks";
import { ProductCard, Spinner } from "~/components";

export const FavoriteProductList = (): JSX.Element => {
  const { data: products } = useLoadFavoriteProducts();

  if (!products) {
    return <Spinner />;
  }

  return (
    <ul
      className="
        grid grid-cols-3 gap-2
        small:grid-cols-1"
    >
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
