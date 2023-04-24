import { QueryClient } from "react-query";
import { QUERY_STALE_TIME } from "./api.const";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      staleTime: QUERY_STALE_TIME,
    },
  },
});
