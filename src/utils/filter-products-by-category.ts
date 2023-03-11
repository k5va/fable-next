import { Category, Product } from "../types";

export function filterProductsByCategory(
  { id }: Category,
  products: Product[]
): Product[] {
  return products.filter(({ categoryId }) => categoryId === id);
}
