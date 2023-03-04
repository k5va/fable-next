import { Category, Product } from "../types";

export function filterProductsByCategory(
  { id }: Category,
  products: Product[]
): Product[] {
  console.log("filterProductsByCategory called");
  return products.filter(({ categoryId }) => categoryId === id);
}
