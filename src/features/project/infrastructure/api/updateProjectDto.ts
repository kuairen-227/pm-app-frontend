"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { UpdateProjectRequest } from "../dto";

export async function updateProjectDto(request: UpdateProjectRequest) {
  const { response, data, error } = await apiClient.PATCH(
    "/api/v{version}/projects/{projectId}",
    {
      params: {
        path: { version: DEFAULT_API_VERSION, projectId: request.projectId },
      },
      body: { name: request.name, description: request.description },
    },
  );

  checkApiError(response, error);

  return data;
}
