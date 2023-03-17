import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchCollections } from "~/api";
import { Collection, LoadResult } from "../types";

export const useLoadCollections = (): LoadResult<Collection[]> => {
  const { data, error, isLoading } = useQuery(
    ["collections", "all"],
    fetchCollections
  );
  useErrorHandler(error);

  return { data, error, isLoading };
};
