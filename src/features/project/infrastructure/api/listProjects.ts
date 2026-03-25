"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError, checkApiResponse } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";

export async function listProjectsDto() {
  const { response, data, error } = await apiClient.GET(
    "/api/v{version}/projects",
    {
      params: { path: { version: DEFAULT_API_VERSION } },
    },
  );

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}
