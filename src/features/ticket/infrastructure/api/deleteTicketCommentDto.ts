"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { DeleteTicketCommentRequest } from "../dto";

export async function deleteTicketCommentDto(
  request: DeleteTicketCommentRequest,
) {
  const { response, data, error } = await apiClient.DELETE(
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
    },
  );

  checkApiError(response, error);

  return data;
}
