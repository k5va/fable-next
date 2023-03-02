import { z } from 'zod';
import { imageSchema } from './image.schema';

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  article: z.string(),
  price: z.number().positive(),
  image: imageSchema,
  images: z.array(imageSchema),
  details: z.string(),
  collection: z.string(),
  category: z.string(),
  registerDate: z.string(),
});
