import {
  type UseMutationOptions,
  type UseMutationResult,
  type UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import { HTTP_METHOD } from "../consts/api";
import type { HttpMethod } from "../types/api";

import { type CallApiOptions, callApi } from "./fetch";

/**
 * API Call Hook - Query
 */
export function useApiQuery<T>(
  endpoint: string,
  fetchOptions: Omit<CallApiOptions<T, void>, "method">,
  queryOptions?: UseQueryOptions<T>,
) {
  return useQuery<T>({
    queryKey: queryKeys.api(endpoint, fetchOptions?.params),
    queryFn: () =>
      callApi(endpoint, {
        method: HTTP_METHOD.GET,
        ...fetchOptions,
      }),
    ...queryOptions,
  });
}

/**
 * API Call Hook - Mutation
 */
export function useApiMutation<T = void, V = unknown>(
  endpoint: string,
  method: Exclude<HttpMethod, typeof HTTP_METHOD.GET>,
  fetchOptions?: Omit<CallApiOptions<T, V>, "method" | "body">,
  queryOptions?: UseMutationOptions<T, unknown, V>,
): UseMutationResult<T, unknown, V> {
  return useMutation({
    mutationFn: (body: V) => {
      return callApi(endpoint, {
        method,
        body,
        ...(fetchOptions ?? {}),
      });
    },
    ...queryOptions,
  });
}

/**
 * QueryKey
 */
const queryKeys = {
  api: (endpoint: string, params?: unknown) =>
    params ? ["api", endpoint, params] : ["api", endpoint],
};
