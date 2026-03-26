"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { ReopenTicketCriterionRequest } from "../dto";

export async function reopenTicketCompletionCriterionDto(
  request: ReopenTicketCriterionRequest,
) {
  const { response, data, error } = await apiClient.POST(
    "/api/v{version}/projects/{projectId}/tickets/{ticketId}/completion-criteria/{criterionId}/reopen",
    {
      params: {
        path: {
          version: DEFAULT_API_VERSION,
          projectId: request.projectId,
          ticketId: request.ticketId,
          criterionId: request.criterionId,
        },
      },
    },
  );

  checkApiError(response, error);

  return data;
}
