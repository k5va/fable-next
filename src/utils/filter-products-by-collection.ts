import { Collection, Product } from "../types";

export function filterProductsByCollection(
  { id }: Collection,
  products: Product[]
): Product[] {
  console.log("filterProductsByCollection called");
  return products.filter(({ collectionId }) => collectionId === id);
}
