import { productSchema } from "~/schema";
import { Product } from "~/types";
import { ApiRoute, BACKEND_URL } from "./api.const";
import axios from "axios";

export async function fetchProducts(ids: string[] = []): Promise<Product[]> {
  const { data } = await axios.get<Product[]>(
    `${BACKEND_URL}/${ApiRoute.PRODUCT}${ids ? `?${ids.join(",")}` : ""}`
  );

  return productSchema.array().parseAsync(data);
}

export async function fetchProduct(id: string): Promise<Product> {
  const { data } = await axios.get<Product>(
    `${BACKEND_URL}/${ApiRoute.PRODUCT}/${id}`
  );

  return productSchema.parseAsync(data);
}
