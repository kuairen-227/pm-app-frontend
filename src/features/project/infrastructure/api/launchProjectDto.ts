"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { LaunchProjectRequest } from "../dto";

export async function launchProjectDto(req: LaunchProjectRequest) {
  const { response, error } = await apiClient.POST("/api/v{version}/projects", {
    params: { path: { version: DEFAULT_API_VERSION } },
    body: {
      name: req.name,
      description: req.description,
    },
  });

  checkApiError(response, error);

  const location = response.headers.get("Location");
  const projectId = location?.split("/").pop();

  return projectId;
}
