import { useErrorHandler } from 'react-error-boundary';
import { useGetProductsQuery } from '../api';
import { LoadResult, Product } from '../types';

export const useLoadProducts = (): LoadResult<Product[]> => {
  const { data, error, isLoading } = useGetProductsQuery();
  useErrorHandler(error);

  return { data, error, isLoading };
};
