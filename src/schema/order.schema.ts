import { z } from "zod";
import { productOrderSchema } from "./product-order.schema";

export const orderSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  productOrders: z.array(productOrderSchema),
});
