import { z } from 'zod';
import { categorySchema } from '../schema';

export type Category = z.infer<typeof categorySchema>;
