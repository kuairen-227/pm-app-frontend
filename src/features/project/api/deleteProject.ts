import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";

export async function deleteProject(projectId: string) {
  const { response, data, error } = await apiClient.DELETE(
    "/api/v{version}/projects/{projectId}",
    {
      params: {
        path: { version: DEFAULT_API_VERSION, projectId: projectId },
      },
    },
  );

  checkApiError(response, error);

  return data;
}
