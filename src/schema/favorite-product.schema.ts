import { z } from "zod";

export const favoriteProductSchema = z.object({
  productId: z.string(),
  userId: z.string(),
  isFavorite: z.boolean(),
});
