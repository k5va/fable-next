import { z } from "zod";

export const createProductOrderSchema = z.object({
  productId: z.string(),
  size: z.string(),
  color: z.string(),
  count: z.number().positive(),
});
