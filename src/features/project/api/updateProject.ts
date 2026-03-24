import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { UpdateProjectRequest } from "../types/api";

export async function updateProject(
  projectId: string,
  body: UpdateProjectRequest,
) {
  const { response, data, error } = await apiClient.PATCH(
    "/api/v{version}/projects/{projectId}",
    {
      params: {
        path: { version: DEFAULT_API_VERSION, projectId: projectId },
      },
      body,
    },
  );

  checkApiError(response, error);

  return data;
}
