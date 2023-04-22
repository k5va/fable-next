import React, { useState } from "react";
import { usePagination } from "@mantine/hooks";
import { useLoadFavoriteProducts } from "~/hooks";
import { ProductCard, Spinner } from "~/components";

const DEFAULT_PAGE_NUM = 1;
const RECORDS_PER_PAGE = 6;

export const FavoriteProductList = (): JSX.Element => {
  const [page, setPage] = useState(DEFAULT_PAGE_NUM);
  const { data: productList } = useLoadFavoriteProducts(page, RECORDS_PER_PAGE);
  const pagination = usePagination({
    total: productList ? Math.ceil(productList.total / RECORDS_PER_PAGE) : 0,
    page,
    onChange: setPage,
  });

  if (!productList) {
    return <Spinner />;
  }

  return (
    <div>
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
      <ul className="flex justify-center gap-4">
        {pagination.range.map((page, index) => (
          <li key={index}>
            {page !== "dots" ? (
              <button onClick={() => pagination.setPage(page)}>{page}</button>
            ) : (
              "..."
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
