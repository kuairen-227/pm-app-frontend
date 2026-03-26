"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { AddTicketCompletionCriterionRequest } from "../dto";

export async function addTicketCompletionCriterionDto(
  request: AddTicketCompletionCriterionRequest,
) {
  const { response, data, error } = await apiClient.POST(
    "/api/v{version}/projects/{projectId}/tickets/{ticketId}/completion-criteria",
    {
      params: {
        path: {
          version: DEFAULT_API_VERSION,
          projectId: request.projectId,
          ticketId: request.ticketId,
        },
      },
      body: { criterion: request.criterion },
    },
  );

  checkApiError(response, error);

  return data;
}
