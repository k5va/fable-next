import { ProductSorting } from '../const';
import { Product, ProductSortingType } from '../types';

export function sortProducts(sorting: ProductSortingType, products: Product[]): Product[] {
  console.log('sortProducts called', sorting, products);
  switch (sorting) {
    case ProductSorting.New:
      return [...products].sort(
        ({ registerDate: date1 }, { registerDate: date2 }) => Date.parse(date1) - Date.parse(date2)
      );
    case ProductSorting.Price:
      return [...products].sort(({ price: price1 }, { price: price2 }) => price1 - price2);
    default:
      throw new Error(`Unknown sorting ${sorting}`);
  }
}
