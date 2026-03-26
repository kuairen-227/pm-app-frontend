export const TicketStatus = {
  ToDo: "ToDo",
  InProgress: "InProgress",
  Done: "Done",
} as const;

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];
