import { ProductSorting } from "~/const";

export type ProductSortingType =
  (typeof ProductSorting)[keyof typeof ProductSorting];
