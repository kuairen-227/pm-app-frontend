import { apiClient } from "@/shared/api/client";
import { checkApiError, checkApiResponse } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { LaunchProjectRequest } from "../types/api";

export async function launchProject(body: LaunchProjectRequest) {
  const { response, data, error } = await apiClient.POST(
    "/api/v{version}/projects",
    {
      params: { path: { version: DEFAULT_API_VERSION } },
      body,
    },
  );

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}
