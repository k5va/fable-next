import { z } from 'zod';

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
});
