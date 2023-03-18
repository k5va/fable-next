import { z } from "zod";
import { orderSchema } from "~/schema";

export type Order = z.infer<typeof orderSchema>;
