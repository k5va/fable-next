import { z } from "zod";
import { categorySchema } from "./category.schema";
import { collectionSchema } from "./collection.schema";
import { imageSchema } from "./image.schema";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  article: z.string(),
  price: z.number().positive(),
  image: imageSchema,
  images: z.array(imageSchema),
  details: z.string(),
  collectionId: z.string(),
  collection: collectionSchema.optional(),
  categoryId: z.string(),
  category: categorySchema.optional(),
  registerDate: z.string(),
});
