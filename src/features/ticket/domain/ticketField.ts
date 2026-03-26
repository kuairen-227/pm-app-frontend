export const TicketField = {
  Title: "Title",
  Description: "Description",
  StartDate: "StartDate",
  EndDate: "EndDate",
  Status: "Status",
  Assignee: "Assignee",
  CompletionCriterion: "CompletionCriterion",
};

export type TicketField = (typeof TicketField)[keyof typeof TicketField];
