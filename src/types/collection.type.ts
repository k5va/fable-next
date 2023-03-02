import { z } from 'zod';
import { collectionSchema } from '../schema';

export type Collection = z.infer<typeof collectionSchema>;
