import { z } from 'zod';
import {
  MAX_ADDRESS_LENGTH,
  MAX_CITY_LENGTH,
  MAX_COMMENT_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_LOYALTY_CARD_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PHONE_LENGTH,
  MIN_FIELD_LENGTH,
} from './const';

export const orderFormSchema = z.object({
  city: z.string().max(MAX_CITY_LENGTH).min(MIN_FIELD_LENGTH),
  delivery: z.enum(['inStore', 'toDoor']),
  address: z.string().max(MAX_ADDRESS_LENGTH).min(MIN_FIELD_LENGTH),
  loyaltyCard: z.string().max(MAX_LOYALTY_CARD_LENGTH).optional(),
  name: z.string().max(MAX_NAME_LENGTH).min(MIN_FIELD_LENGTH),
  phone: z.string().max(MAX_PHONE_LENGTH).min(MIN_FIELD_LENGTH),
  email: z.string().email().max(MAX_EMAIL_LENGTH),
  payment: z.enum(['card']),
  comment: z.string().max(MAX_COMMENT_LENGTH).optional(),
});
