import { useMemo } from "react";
import { Collection, Product } from "../types";
import { filterProductsByCollection } from "~/utils";

export const useFilterProductsByCollection = (
  collection: Collection,
  products?: Product[]
): Product[] => {
  return useMemo(
    () => (products ? filterProductsByCollection(collection, products) : []),
    [collection, products]
  );
};
