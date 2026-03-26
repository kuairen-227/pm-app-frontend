"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { EditTicketCommentRequest } from "../dto";

export async function editTicketCommentDto(request: EditTicketCommentRequest) {
  const { response, data, error } = await apiClient.PATCH(
    "/api/v{version}/projects/{projectId}/tickets/{ticketId}/comments/{commentId}",
    {
      params: {
        path: {
          version: DEFAULT_API_VERSION,
          projectId: request.projectId,
          ticketId: request.ticketId,
          commentId: request.commentId,
        },
      },
      body: {
        content: request.content,
      },
    },
  );

  checkApiError(response, error);

  return data;
}
