"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { AddTicketCommentRequest } from "../dto";

export async function addTicketCommentDto(request: AddTicketCommentRequest) {
  const { response, data, error } = await apiClient.POST(
    "/api/v{version}/projects/{projectId}/tickets/{ticketId}/comments",
    {
      params: {
        path: {
          version: DEFAULT_API_VERSION,
          projectId: request.projectId,
          ticketId: request.ticketId,
        },
      },
      body: {
        assigneeId: request.assigneeId,
        startDate: request.startDate,
        endDate: request.endDate,
        status: request.status,
        comment: request.comment,
        notificationRecipientIds: request.notificationRecipientIds,
      },
    },
  );

  checkApiError(response, error);

  return data;
}
