import { z } from "zod";
import { favoriteProductSchema } from "~/schema";

export type FavoriteProduct = z.infer<typeof favoriteProductSchema>;
