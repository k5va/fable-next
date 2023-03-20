import { z } from "zod";
import {
  ORDER_MAX_ADDRESS_LENGTH,
  ORDER_MAX_CITY_LENGTH,
  ORDER_MAX_COMMENT_LENGTH,
  ORDER_MAX_EMAIL_LENGTH,
  ORDER_MAX_LOYALTY_CARD_LENGTH,
  ORDER_MAX_NAME_LENGTH,
  ORDER_MAX_PHONE_LENGTH,
  ORDER_MIN_FIELD_LENGTH,
} from "~/const";
import { productOrderSchema } from "./product-order.schema";

export const orderSchema = z.object({
  id: z.string().optional(),
  city: z.string().max(ORDER_MAX_CITY_LENGTH).min(ORDER_MIN_FIELD_LENGTH),
  delivery: z.enum(["inStore", "toDoor"]),
  address: z.string().max(ORDER_MAX_ADDRESS_LENGTH).min(ORDER_MIN_FIELD_LENGTH),
  loyaltyCard: z.string().max(ORDER_MAX_LOYALTY_CARD_LENGTH).optional(),
  name: z.string().max(ORDER_MAX_NAME_LENGTH).min(ORDER_MIN_FIELD_LENGTH),
  phone: z.string().max(ORDER_MAX_PHONE_LENGTH).min(ORDER_MIN_FIELD_LENGTH),
  email: z.string().email().max(ORDER_MAX_EMAIL_LENGTH),
  payment: z.enum(["card"]),
  comment: z.string().max(ORDER_MAX_COMMENT_LENGTH).optional(),
  createdAt: z.string().optional(),
  productOrders: z.array(productOrderSchema),
});
