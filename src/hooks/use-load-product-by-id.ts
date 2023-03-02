import { useErrorHandler } from 'react-error-boundary';
import { useGetProductByIdQuery } from '../api';
import { LoadResult, Product } from '../types';

export const useLoadProductById = (id: string): LoadResult<Product> => {
  const { data, error, isLoading } = useGetProductByIdQuery(id);
  useErrorHandler(error);

  return { data, error, isLoading };
};
