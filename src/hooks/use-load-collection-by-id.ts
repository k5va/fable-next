import { useErrorHandler } from 'react-error-boundary';
import { useGetCollectionByIdQuery } from '../api';
import { Collection, LoadResult } from '../types';

export const useLoadCollectionById = (id: string): LoadResult<Collection> => {
  const { data, error, isLoading } = useGetCollectionByIdQuery(id);
  useErrorHandler(error);

  return { data, error, isLoading };
};
