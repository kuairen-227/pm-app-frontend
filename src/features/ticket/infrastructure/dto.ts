import type { RequestDto, ResponseDto } from "@/shared/types/api";

export type ListTicketsRequest = RequestDto<"Tickets_List">;
export type ListTicketsResponse = ResponseDto<"Tickets_List", 200>;

export type GetTicketRequest = RequestDto<"Tickets_GetById">;
export type GetTicketResponse = ResponseDto<"Tickets_GetById", 200>;

export type CreateTicketRequest = RequestDto<"Tickets_Create">;
export type CreateTicketResponse = ResponseDto<"Tickets_Create", 201>;

export type UpdateTicketRequest = RequestDto<"Tickets_Update">;
export type UpdateTicketResponse = ResponseDto<"Tickets_Update", 204>;

export type DeleteTicketRequest = RequestDto<"Tickets_Delete">;
export type DeleteTicketResponse = ResponseDto<"Tickets_Delete", 204>;

export type AddTicketCompletionCriterionRequest =
  RequestDto<"Tickets_AddCompletionCriterion">;
export type AddTicketCompletionCriterionResponse = ResponseDto<
  "Tickets_AddCompletionCriterion",
  201
>;

export type EditTicketCompletionCriterionRequest =
  RequestDto<"Tickets_EditCompletionCriterion">;
export type EditTicketCompletionCriterionResponse = ResponseDto<
  "Tickets_EditCompletionCriterion",
  204
>;

export type DeleteTicketCompletionCriterionRequest =
  RequestDto<"Tickets_DeleteCompletionCriterion">;
export type DeleteTicketCompletionCriterionResponse = ResponseDto<
  "Tickets_DeleteCompletionCriterion",
  204
>;

export type CompleteTicketCriterionRequest =
  RequestDto<"Tickets_CompleteCriterion">;
export type CompleteTicketCriterionResponse = ResponseDto<
  "Tickets_CompleteCriterion",
  201
>;

export type ReopenTicketCriterionRequest =
  RequestDto<"Tickets_ReopenCriterion">;
export type ReopenTicketCriterionResponse = ResponseDto<
  "Tickets_ReopenCriterion",
  201
>;

export type AddTicketCommentRequest = RequestDto<"Tickets_AddComment">;
export type AddTicketCommentResponse = ResponseDto<"Tickets_AddComment", 201>;

export type EditTicketCommentRequest = RequestDto<"Tickets_EditComment">;
export type EditTicketCommentResponse = ResponseDto<"Tickets_EditComment", 204>;

export type DeleteTicketCommentRequest = RequestDto<"Tickets_DeleteComment">;
export type DeleteTicketCommentResponse = ResponseDto<
  "Tickets_DeleteComment",
  204
>;
