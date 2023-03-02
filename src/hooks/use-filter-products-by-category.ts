import { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { getSorting } from "../store";
import { Category, Product } from "../types";
import { filterProductsByCategory, sortProducts } from "~/utils";
import { ProductSorting } from "~/const";

export const useFilterProductsByCategory = (
  category: Category,
  products: Product[]
) => {
  const sorting = ProductSorting.New;
  // const sorting = useSelector(getSorting);

  return useMemo(
    () => sortProducts(sorting, filterProductsByCategory(category, products)),
    [category, sorting, products]
  );
};
