import type { TicketField } from "./ticketField";

export type TicketHistoryChange = {
  field: TicketField;
  before: string | null;
  after: string | null;
};
