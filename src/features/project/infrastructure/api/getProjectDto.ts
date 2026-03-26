"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError, checkApiResponse } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { GetProjectRequest } from "../dto";

export async function getProjectDto(req: GetProjectRequest) {
  const { response, data, error } = await apiClient.GET(
    "/api/v{version}/projects/{projectId}",
    {
      params: {
        path: {
          version: DEFAULT_API_VERSION,
          projectId: req.projectId,
        },
      },
    },
  );

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}
