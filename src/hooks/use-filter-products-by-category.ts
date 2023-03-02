import { useMemo } from "react";
import { Category, Product } from "../types";
import { filterProductsByCategory, sortProducts } from "~/utils";
import { useSorting } from "~/store";

export const useFilterProductsByCategory = (
  category: Category,
  products: Product[]
) => {
  const sorting = useSorting((state) => state.sorting);

  return useMemo(
    () => sortProducts(sorting, filterProductsByCategory(category, products)),
    [category, sorting, products]
  );
};
