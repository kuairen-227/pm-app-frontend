"server-only";

import { apiClient } from "@/shared/api/client";
import { checkApiError } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { Ticket } from "../../domain/ticket";
import type { CreateTicketRequest } from "../dto";

export async function createTicketDto(
  projectId: Ticket["projectId"],
  body: CreateTicketRequest,
) {
  const { response, error } = await apiClient.POST(
    "/api/v{version}/projects/{projectId}/tickets",
    {
      params: { path: { version: DEFAULT_API_VERSION, projectId: projectId } },
      body,
    },
  );

  checkApiError(response, error);

  return response;
}
