import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export type LoadResult<T> = {
  data: T | undefined;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
};
