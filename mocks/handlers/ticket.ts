import { mockTickets } from "@mocks/data";
import { getDefaultBaseUrl } from "@mocks/utils/apiConfig";
import {
  createMockResponse,
  createPaginatedResponse,
  getPaginationParams,
  type MockConfig,
} from "@mocks/utils/mockHelper";
import { HttpResponse, http } from "msw";
import type {
  AddTicketCommentResponse,
  AddTicketCompletionCriterionResponse,
  CompleteTicketCriterionResponse,
  DeleteTicketCommentResponse,
  DeleteTicketCompletionCriterionResponse,
  DeleteTicketResponse,
  EditTicketCommentResponse,
  EditTicketCompletionCriterionResponse,
  GetTicketResponse,
  ListTicketsResponse,
  ReopenTicketCriterionResponse,
  UpdateTicketResponse,
} from "@/features/ticket/infrastructure/dto";

const baseUrl = `${getDefaultBaseUrl()}/projects`;

const listTicketsConfig: MockConfig<ListTicketsResponse> = {
  mode: "success",
  successStatus: 200,
  errorStatus: 401,
  customResponses: undefined,
};

const getTicketConfig: MockConfig<GetTicketResponse> = {
  mode: "success",
  successStatus: 200,
  errorStatus: 404,
  customResponses: undefined,
};

const updateTicketConfig: MockConfig<UpdateTicketResponse> = {
  mode: "success",
  successStatus: 204,
  errorStatus: 404,
  customResponses: undefined,
};

const deleteTicketConfig: MockConfig<DeleteTicketResponse> = {
  mode: "success",
  successStatus: 204,
  errorStatus: 404,
  customResponses: undefined,
};

const addTicketCompletionCriterionConfig: MockConfig<AddTicketCompletionCriterionResponse> =
  {
    mode: "success",
    successStatus: 201,
    errorStatus: 404,
    customResponses: undefined,
  };

const editTicketCompletionCriterionConfig: MockConfig<EditTicketCompletionCriterionResponse> =
  {
    mode: "success",
    successStatus: 204,
    errorStatus: 404,
    customResponses: undefined,
  };

const deleteTicketCompletionCriterionConfig: MockConfig<DeleteTicketCompletionCriterionResponse> =
  {
    mode: "success",
    successStatus: 204,
    errorStatus: 404,
    customResponses: undefined,
  };

const completeTicketCompletionCriterionConfig: MockConfig<CompleteTicketCriterionResponse> =
  {
    mode: "success",
    successStatus: 204,
    errorStatus: 404,
    customResponses: undefined,
  };

const reopenTicketCompletionCriterionConfig: MockConfig<ReopenTicketCriterionResponse> =
  {
    mode: "success",
    successStatus: 204,
    errorStatus: 404,
    customResponses: undefined,
  };

const addTicketCommentConfig: MockConfig<AddTicketCommentResponse> = {
  mode: "success",
  successStatus: 201,
  errorStatus: 404,
  customResponses: undefined,
};

const editTicketCommentConfig: MockConfig<EditTicketCommentResponse> = {
  mode: "success",
  successStatus: 204,
  errorStatus: 404,
  customResponses: undefined,
};

const deleteTicketCommentConfig: MockConfig<DeleteTicketCommentResponse> = {
  mode: "success",
  successStatus: 204,
  errorStatus: 404,
  customResponses: undefined,
};

/**
 * チケット一覧取得 API
 */
export const listTicketsHandler = http.get(
  `${baseUrl}/:projectId/tickets`,
  async ({ request, params }) => {
    const projectId = String(params.projectId);
    const pagedParams = getPaginationParams(request.url);

    const tickets = mockTickets.map((ticket) => ({
      id: ticket.id,
      projectId: projectId,
      title: ticket.title,
      assigneeId: ticket.assigneeId ?? null,
      startDate: ticket.startDate ?? null,
      endDate: ticket.endDate ?? null,
      status: ticket.status,
      createdBy: ticket.createdBy,
      createdAt: ticket.createdAt,
      updatedBy: ticket.updatedBy,
      updatedAt: ticket.updatedAt,
    }));

    return createMockResponse(
      undefined,
      () => true,
      createPaginatedResponse(tickets, pagedParams),
      {},
      listTicketsConfig,
    );
  },
);

/**
 * チケット単体取得 API
 */
export const getTicketHandler = http.get(
  `${baseUrl}/:projectId/tickets/:ticketId`,
  async ({ params }) => {
    const ticketId = String(params.ticketId);
    const ticket = mockTickets.find((t) => t.id === ticketId);

    return createMockResponse(
      undefined,
      () => !!ticket,
      ticket,
      {},
      getTicketConfig,
    );
  },
);

/**
 * チケット作成 API
 */
export const createTicketHandler = http.post(
  `${baseUrl}/:projectId/tickets`,
  async ({ params }) => {
    const projectId = String(params.projectId);
    const newTicketId = crypto.randomUUID();

    return new HttpResponse(null, {
      status: 201,
      headers: {
        Location: `${baseUrl}/${projectId}/tickets/${newTicketId}`,
      },
    });
  },
);

/**
 * チケット編集 API
 */
export const updateTicketHandler = http.patch(
  `${baseUrl}/:projectId/tickets/:ticketId`,
  async () => {
    return createMockResponse(
      undefined,
      () => true,
      undefined,
      {},
      updateTicketConfig,
    );
  },
);

/**
 * チケット削除 API
 */
export const deleteTicketHandler = http.delete(
  `${baseUrl}/:projectId/tickets/:ticketId`,
  async ({ params }) => {
    const ticketId = String(params.ticketId);
    const ticket = mockTickets.find((t) => t.id === ticketId);

    return createMockResponse(
      undefined,
      () => !!ticket,
      undefined,
      {},
      deleteTicketConfig,
    );
  },
);

/**
 * チケット完了条件追加 API
 */
export const addTicketCompletionCriterionHandler = http.post(
  `${baseUrl}/:projectId/tickets/:ticketId/completion-criteria`,
  async ({ params }) => {
    const ticketId = String(params.ticketId);
    const ticket = mockTickets.find((t) => t.id === ticketId);

    return createMockResponse(
      undefined,
      () => !!ticket,
      undefined,
      {},
      addTicketCompletionCriterionConfig,
    );
  },
);

/**
 * チケット完了条件編集 API
 */
export const editTicketCompletionCriterionHandler = http.patch(
  `${baseUrl}/:projectId/tickets/:ticketId/completion-criteria/:criterionId`,
  async ({ params }) => {
    const ticketId = String(params.ticketId);
    const criterionId = String(params.criterionId);
    const ticket = mockTickets.find((t) => t.id === ticketId);
    const criterion = ticket?.completionCriteria.find(
      (c) => c.id === criterionId,
    );

    return createMockResponse(
      undefined,
      () => !!criterion,
      undefined,
      {},
      editTicketCompletionCriterionConfig,
    );
  },
);

/**
 * チケット完了条件削除 API
 */
export const deleteTicketCompletionCriterionHandler = http.delete(
  `${baseUrl}/:projectId/tickets/:ticketId/completion-criteria/:criterionId`,
  async ({ params }) => {
    const ticketId = String(params.ticketId);
    const criterionId = String(params.criterionId);
    const ticket = mockTickets.find((t) => t.id === ticketId);
    const criterion = ticket?.completionCriteria.find(
      (c) => c.id === criterionId,
    );

    return createMockResponse(
      undefined,
      () => !!criterion,
      undefined,
      {},
      deleteTicketCompletionCriterionConfig,
    );
  },
);

/**
 * チケット完了条件完了 API
 */
export const completeTicketCompletionCriterionHandler = http.post(
  `${baseUrl}/:projectId/tickets/:ticketId/completion-criteria/:criterionId/complete`,
  async ({ params }) => {
    const ticketId = String(params.ticketId);
    const criterionId = String(params.criterionId);
    const ticket = mockTickets.find((t) => t.id === ticketId);
    const criterion = ticket?.completionCriteria.find(
      (c) => c.id === criterionId,
    );

    return createMockResponse(
      undefined,
      () => !!criterion,
      undefined,
      {},
      completeTicketCompletionCriterionConfig,
    );
  },
);

/**
 * チケット完了条件再オープン API
 */
export const reopenTicketCompletionCriterionHandler = http.post(
  `${baseUrl}/:projectId/tickets/:ticketId/completion-criteria/:criterionId/reopen`,
  async ({ params }) => {
    const ticketId = String(params.ticketId);
    const criterionId = String(params.criterionId);
    const ticket = mockTickets.find((t) => t.id === ticketId);
    const criterion = ticket?.completionCriteria.find(
      (c) => c.id === criterionId,
    );

    return createMockResponse(
      undefined,
      () => !!criterion,
      undefined,
      {},
      reopenTicketCompletionCriterionConfig,
    );
  },
);

/**
 * チケットコメント投稿 API
 */
export const addTicketCommentHandler = http.post(
  `${baseUrl}/:projectId/tickets/:ticketId/comments`,
  async ({ params }) => {
    const ticketId = String(params.ticketId);
    const ticket = mockTickets.find((t) => t.id === ticketId);

    return createMockResponse(
      undefined,
      () => !!ticket,
      undefined,
      {},
      addTicketCommentConfig,
    );
  },
);

/**
 * チケットコメント編集 API
 */
export const editTicketCommentHandler = http.patch(
  `${baseUrl}/:projectId/tickets/:ticketId/comments/:commentId`,
  async ({ params }) => {
    const ticketId = String(params.ticketId);
    const commentId = String(params.commentId);
    const ticket = mockTickets.find((t) => t.id === ticketId);
    const comment = ticket?.comments.find((c) => c.id === commentId);

    return createMockResponse(
      undefined,
      () => !!comment,
      undefined,
      {},
      editTicketCommentConfig,
    );
  },
);

/**
 * チケットコメント削除 API
 */
export const deleteTicketCommentHandler = http.delete(
  `${baseUrl}/:projectId/tickets/:ticketId/comments/:commentId`,
  async ({ params }) => {
    const ticketId = String(params.ticketId);
    const commentId = String(params.commentId);
    const ticket = mockTickets.find((t) => t.id === ticketId);
    const comment = ticket?.comments.find((c) => c.id === commentId);

    return createMockResponse(
      undefined,
      () => !!comment,
      undefined,
      {},
      deleteTicketCommentConfig,
    );
  },
);
