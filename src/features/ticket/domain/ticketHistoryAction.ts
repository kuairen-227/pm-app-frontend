export const TicketHistoryAction = {
  TicketCreated: "TicketCreated",
  TicketUpdated: "TicketUpdated",
} as const;

export type TicketHistoryAction =
  (typeof TicketHistoryAction)[keyof typeof TicketHistoryAction];
