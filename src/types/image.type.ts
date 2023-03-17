import { z } from 'zod';
import { imageSchema } from '../schema';

export type Image = z.infer<typeof imageSchema>;
