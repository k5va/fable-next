import { z } from "zod";
import { createOrderSchema } from "~/schema";

export type CreateOrder = z.infer<typeof createOrderSchema>;
