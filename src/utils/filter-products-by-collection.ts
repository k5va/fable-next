import { Collection, Product } from "../types";

export function filterProductsByCollection(
  { id }: Collection,
  products: Product[]
): Product[] {
  return products.filter(({ collectionId }) => collectionId === id);
}
