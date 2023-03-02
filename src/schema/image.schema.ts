import { z } from 'zod';

export const imageSchema = z.object({ id: z.string(), src: z.string() });
