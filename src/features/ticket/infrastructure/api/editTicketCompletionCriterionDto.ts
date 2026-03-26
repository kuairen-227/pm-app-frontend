"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { EditTicketCompletionCriterionRequest } from "../dto";

export async function editTicketCompletionCriterionDto(
  request: EditTicketCompletionCriterionRequest,
) {
  const { response, data, error } = await apiClient.PATCH(
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
      body: {
        criterion: request.criterion,
      },
    },
  );

  checkApiError(response, error);

  return data;
}
