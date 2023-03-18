import { RegisterOptions } from "react-hook-form";
import { Order } from "~/types";

export type OrderFormValidator = Pick<
  RegisterOptions<Order>,
  "required" | "maxLength" | "minLength" | "pattern"
>;
