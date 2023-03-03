import { useErrorHandler } from "react-error-boundary";
import { useQuery } from "react-query";
import { fetchCollection } from "~/api";
import { Collection, LoadResult } from "../types";

export const useLoadCollectionById = (id: string): LoadResult<Collection> => {
  const { data, error, isLoading } = useQuery(["collections", id], () =>
    fetchCollection(id)
  );
  useErrorHandler(error);

  return { data, error, isLoading };
};
