import { z } from "zod";
import { productSchema } from "./product.schema";

export const productListSchema = z.object({
  total: z.number(),
  page: z.number(),
  count: z.number(),
  products: z.array(productSchema),
});
