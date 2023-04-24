import axios from "axios";
import {
  favoriteProductSchema,
  productListSchema,
  productSchema,
} from "~/schema";
import { Product, FavoriteProduct, ProductList } from "~/types";
import { ApiRoute, BACKEND_URL } from "./api.const";

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

export async function fetchFavoriteProducts({
  page,
  count,
}: Pick<ProductList, "count" | "page">): Promise<ProductList> {
  const { data } = await axios.get<ProductList>(
    `${BACKEND_URL}/${ApiRoute.PRODUCT}/favorites?page=${page}&count=${count}`
  );

  return productListSchema.parseAsync(data);
}

export async function fetchIsFavoriteProduct(
  productId: string
): Promise<FavoriteProduct> {
  const { data } = await axios.get<FavoriteProduct>(
    `${BACKEND_URL}/${ApiRoute.PRODUCT}/${productId}/favorite`
  );

  return favoriteProductSchema.parseAsync(data);
}

export async function setFavoriteProduct({
  productId,
  isFavorite,
}: Pick<
  FavoriteProduct,
  "productId" | "isFavorite"
>): Promise<FavoriteProduct> {
  const { data } = await axios.patch<FavoriteProduct>(
    `${BACKEND_URL}/${ApiRoute.PRODUCT}/${productId}/favorite?set=${isFavorite}`
  );

  return favoriteProductSchema.parseAsync(data);
}
