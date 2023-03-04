import { z } from "zod";
import { productSchema } from "../schema";

export type Product = z.infer<typeof productSchema>;
