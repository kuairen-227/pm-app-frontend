"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { DeleteTicketRequest } from "../dto";

export async function deleteTicketDto(request: DeleteTicketRequest) {
  const { response, data, error } = await apiClient.DELETE(
    "/api/v{version}/projects/{projectId}/tickets/{ticketId}",
    {
      params: {
        path: {
          version: DEFAULT_API_VERSION,
          projectId: request.projectId,
          ticketId: request.ticketId,
        },
      },
    },
  );

  checkApiError(response, error);

  return data;
}
