import { RegisterOptions } from 'react-hook-form';
import { orderFormSchema } from './order-form.schema';
import { z } from 'zod';

export type OrderFormFields = z.infer<typeof orderFormSchema>;

export type OrderFormValidator = Pick<
  RegisterOptions<OrderFormFields>,
  'required' | 'maxLength' | 'minLength' | 'pattern'
>;
