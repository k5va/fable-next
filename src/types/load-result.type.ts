export type LoadResult<T> = {
  data: T | undefined;
  error: unknown;
  isLoading: boolean;
};
