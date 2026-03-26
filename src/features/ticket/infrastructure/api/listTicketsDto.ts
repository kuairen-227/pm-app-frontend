"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError, checkApiResponse } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { Ticket } from "../../domain/ticket";

export async function listTicketsDto(projectId: Ticket["projectId"]) {
  const { response, data, error } = await apiClient.GET(
    "/api/v{version}/projects/{projectId}/tickets",
    {
      params: { path: { version: DEFAULT_API_VERSION, projectId: projectId } },
    },
  );

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}
