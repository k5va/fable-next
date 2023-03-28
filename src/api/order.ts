import { orderSchema } from "~/schema";
import { CreateOrder, Order, Sorting } from "~/types";
import { ApiRoute, BACKEND_URL } from "./api.const";
import axios from "axios";

export async function fetchOrders(sort: Sorting = "desc"): Promise<Order[]> {
  const { data } = await axios.get<Order[]>(
    `${BACKEND_URL}/${ApiRoute.ORDER}?sort=${sort}`
  );

  return orderSchema.array().parseAsync(data);
}

export async function createOrder(order: CreateOrder): Promise<Order> {
  const { data } = await axios.post<Order>(
    `${BACKEND_URL}/${ApiRoute.ORDER}`,
    order
  );

  return orderSchema.parseAsync(data);
}
