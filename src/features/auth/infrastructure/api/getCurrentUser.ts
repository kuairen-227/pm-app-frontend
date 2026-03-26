import { apiClient } from "@/shared/api/client";
import { checkApiError, checkApiResponse } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { GetCurrentUserResponse } from "../dto";

export async function getCurrentUser(): Promise<GetCurrentUserResponse | null> {
  const { response, data, error } = await apiClient.GET(
    "/api/v{version}/auth/me",
    {
      params: { path: { version: DEFAULT_API_VERSION } },
    },
  );

  if (response.status === 401) return null;

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}
