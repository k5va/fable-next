import { z } from "zod";
import { productListSchema } from "~/schema";

export type ProductList = z.infer<typeof productListSchema>;
