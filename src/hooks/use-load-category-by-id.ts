import { useErrorHandler } from "react-error-boundary";
import { useGetCategoryByIdQuery } from "../api";
import { Category, LoadResult } from "../types";

export const useLoadCategoryById = (id: string): LoadResult<Category> => {
  const { data, error, isLoading } = useGetCategoryByIdQuery(id);
  useErrorHandler(error);

  return { data, error, isLoading };
};
