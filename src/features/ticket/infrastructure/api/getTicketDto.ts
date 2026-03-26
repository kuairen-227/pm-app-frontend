"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError, checkApiResponse } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { Ticket } from "../../domain/ticket";

export async function getTicketDto(
  projectId: Ticket["projectId"],
  ticketId: Ticket["id"],
) {
  const { response, data, error } = await apiClient.GET(
    "/api/v{version}/projects/{projectId}/tickets/{ticketId}",
    {
      params: {
        path: {
          version: DEFAULT_API_VERSION,
          projectId: projectId,
          ticketId: ticketId,
        },
      },
    },
  );

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}
