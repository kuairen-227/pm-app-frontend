"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { UpdateTicketRequest } from "../dto";

export async function updateTicketDto(request: UpdateTicketRequest) {
  const { response, data, error } = await apiClient.PATCH(
    "/api/v{version}/projects/{projectId}/tickets/{ticketId}",
    {
      params: {
        path: {
          version: DEFAULT_API_VERSION,
          projectId: request.projectId,
          ticketId: request.ticketId,
        },
      },
      body: {
        title: request.title,
        description: request.description,
        assigneeId: request.assigneeId,
        startDate: request.startDate,
        endDate: request.endDate,
        status: request.status,
        completionCriterionOperations: request.completionCriterionOperations,
        comment: request.comment,
        notificationRecipientIds: request.notificationRecipientIds,
      },
    },
  );

  checkApiError(response, error);

  return data;
}
