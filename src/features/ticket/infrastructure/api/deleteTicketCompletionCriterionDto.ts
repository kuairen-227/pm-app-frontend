"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { DeleteTicketCompletionCriterionRequest } from "../dto";

export async function deleteTicketCompletionCriterionDto(
  request: DeleteTicketCompletionCriterionRequest,
) {
  const { response, data, error } = await apiClient.DELETE(
    "/api/v{version}/projects/{projectId}/tickets/{ticketId}/completion-criteria/{criterionId}",
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
