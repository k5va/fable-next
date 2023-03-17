import { Product } from './product.type';

export type ProductOrder = {
  product: Product;
  size: string;
  color: string;
  count: number;
};
