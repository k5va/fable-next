import { categorySchema } from "~/schema";
import { Category } from "~/types";
import { ApiRoute, BACKEND_URL } from "./api.const";
import axios from "axios";

export async function fetchCategories(): Promise<Category[]> {
  const { data } = await axios.get<Category[]>(
    `${BACKEND_URL}/${ApiRoute.CATEGORY}`
  );
  return categorySchema.array().parseAsync(data);
}

export async function fetchCategory(id: string): Promise<Category> {
  const { data } = await axios.get<Category>(
    `${BACKEND_URL}/${ApiRoute.CATEGORY}/${id}`
  );
  return categorySchema.parseAsync(data);
}
