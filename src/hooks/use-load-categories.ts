import { useErrorHandler } from "react-error-boundary";
// import { useGetCategoriesQuery } from '../api';
import { Category, LoadResult } from "../types";

export const useLoadCategories = (): LoadResult<Category[]> => {
  // const { data, error, isLoading } = useGetCategoriesQuery();
  const { data, error, isLoading } = {
    data: [],
    error: undefined,
    isLoading: false,
  };
  useErrorHandler(error);

  return { data, error, isLoading };
};
