import { apiClient } from "@/shared/api/client";
import { checkApiError, checkApiResponse } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";

export async function getProject(projectId: string) {
  const { response, data, error } = await apiClient.GET(
    "/api/v{version}/projects/{projectId}",
    {
      params: { path: { version: DEFAULT_API_VERSION, projectId: projectId } },
    },
  );

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}
