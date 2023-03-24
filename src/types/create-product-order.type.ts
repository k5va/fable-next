import { z } from "zod";
import { createProductOrderSchema } from "~/schema";

export type CreateProductOrder = z.infer<typeof createProductOrderSchema>;
