"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { LaunchProjectRequest } from "../dto";

export async function launchProjectDto(body: LaunchProjectRequest) {
  const { response, error } = await apiClient.POST("/api/v{version}/projects", {
    params: { path: { version: DEFAULT_API_VERSION } },
    body,
  });

  checkApiError(response, error);

  return response;
}
