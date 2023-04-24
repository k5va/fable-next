import React, { useState } from "react";
import { useLoadFavoriteProducts } from "~/hooks";
import { Pagination, ProductCard, Spinner } from "~/components";

const DEFAULT_PAGE_NUM = 1;
const RECORDS_PER_PAGE = 6;

export const FavoriteProductList = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE_NUM);
  const { data: productList } = useLoadFavoriteProducts(
    currentPage,
    RECORDS_PER_PAGE
  );

  if (!productList) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-4 pb-2">
      <ul
        className="
          grid grid-cols-3 gap-2
          small:grid-cols-1"
      >
        {productList.products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <Pagination
        current={currentPage}
        total={
          productList.total
            ? Math.ceil(productList.total / RECORDS_PER_PAGE)
            : 0
        }
        onChange={setCurrentPage}
      />
    </div>
  );
};
