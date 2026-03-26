"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { DeleteProjectRequest } from "../dto";

export async function deleteProjectDto(request: DeleteProjectRequest) {
  const { response, data, error } = await apiClient.DELETE(
    "/api/v{version}/projects/{projectId}",
    {
      params: {
        path: { version: DEFAULT_API_VERSION, projectId: request.projectId },
      },
    },
  );

  checkApiError(response, error);

  return data;
}
