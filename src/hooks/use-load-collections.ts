import { useErrorHandler } from 'react-error-boundary';
import { useGetCollectionsQuery } from '../api';
import { Collection, LoadResult } from '../types';

export const useLoadCollections = (): LoadResult<Collection[]> => {
  const { data, error, isLoading } = useGetCollectionsQuery();
  useErrorHandler(error);

  return { data, error, isLoading };
};
