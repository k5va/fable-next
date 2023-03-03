import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchCategories } from "~/api";
import { Category, LoadResult } from "../types";

export const useLoadCategories = (): LoadResult<Category[]> => {
  const { data, error, isLoading } = useQuery(
    ["categories", "all"],
    fetchCategories
  );
  useErrorHandler(error);

  return { data, error, isLoading };
};
