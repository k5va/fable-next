export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const QUERY_STALE_TIME = 1000 * 5;

export const ApiRoute = {
  PRODUCT: "product",
  CATEGORY: "category",
  COLLECTION: "collection",
} as const;
