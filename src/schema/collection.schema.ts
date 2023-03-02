import { z } from 'zod';

export const collectionSchema = z.object({
  id: z.string(),
  name: z.string(),
});
