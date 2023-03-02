import { collectionSchema } from "~/schema";
import { Collection } from "~/types";
import { ApiRoute, BACKEND_URL } from "./api.const";
import axios from "axios";

export async function fetchCollections(): Promise<Collection[]> {
  const data = await axios.get(`${BACKEND_URL}/${ApiRoute.COLLECTION}`);
  return collectionSchema.array().parseAsync(data);
}

export async function fetchCollection(id: string): Promise<Collection> {
  const data = await axios.get(`${BACKEND_URL}/${ApiRoute.COLLECTION}/${id}`);
  return collectionSchema.parseAsync(data);
}
