import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchCategory } from "~/api";
import { Category, LoadResult } from "../types";

export const useLoadCategoryById = (id: string): LoadResult<Category> => {
  const { data, error, isLoading } = useQuery(["categories", id], () =>
    fetchCategory(id)
  );
  useErrorHandler(error);

  return { data, error, isLoading };
};
