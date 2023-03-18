import { z } from "zod";
import { productOrderSchema } from "~/schema";

export type ProductOrder = z.infer<typeof productOrderSchema>;
