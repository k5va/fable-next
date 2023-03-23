import { orderSchema } from "~/schema";
import { CreateOrder, Order } from "~/types";
import { ApiRoute, BACKEND_URL } from "./api.const";
import axios from "axios";

export async function fetchOrders(): Promise<Order[]> {
  const { data } = await axios.get<Order[]>(`${BACKEND_URL}/${ApiRoute.ORDER}`);

  return orderSchema.array().parseAsync(data);
}

export async function createOrder(order: CreateOrder): Promise<Order> {
  const { data } = await axios.post<Order>(
    `${BACKEND_URL}/${ApiRoute.ORDER}`,
    order
  );

  return orderSchema.parseAsync(data);
}
