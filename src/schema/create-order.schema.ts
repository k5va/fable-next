import { z } from "zod";
import {
  ORDER_DELIVERIES,
  ORDER_MAX_ADDRESS_LENGTH,
  ORDER_MAX_CITY_LENGTH,
  ORDER_MAX_COMMENT_LENGTH,
  ORDER_MAX_EMAIL_LENGTH,
  ORDER_MAX_LOYALTY_CARD_LENGTH,
  ORDER_MAX_NAME_LENGTH,
  ORDER_MAX_PHONE_LENGTH,
  ORDER_MIN_FIELD_LENGTH,
  ORDER_PAYMENTS,
} from "~/const";
import { createProductOrderSchema } from "./create-product-order.schema";

export const createOrderSchema = z.object({
  city: z.string().max(ORDER_MAX_CITY_LENGTH).min(ORDER_MIN_FIELD_LENGTH),
  delivery: z.enum(ORDER_DELIVERIES),
  address: z.string().max(ORDER_MAX_ADDRESS_LENGTH).min(ORDER_MIN_FIELD_LENGTH),
  loyaltyCard: z.string().max(ORDER_MAX_LOYALTY_CARD_LENGTH).optional(),
  name: z.string().max(ORDER_MAX_NAME_LENGTH).min(ORDER_MIN_FIELD_LENGTH),
  phone: z.string().max(ORDER_MAX_PHONE_LENGTH).min(ORDER_MIN_FIELD_LENGTH),
  email: z.string().email().max(ORDER_MAX_EMAIL_LENGTH),
  payment: z.enum(ORDER_PAYMENTS),
  comment: z.string().max(ORDER_MAX_COMMENT_LENGTH).optional(),
  productOrders: z.array(createProductOrderSchema),
});
