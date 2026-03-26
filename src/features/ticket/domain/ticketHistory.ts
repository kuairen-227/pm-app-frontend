import type { AuditInfo } from "@/shared/types/domain";
import type { TicketHistoryAction } from "./ticketHistoryAction";
import type { TicketHistoryChange } from "./ticketHistoryChange";

export type TicketHistory = {
  id: string;
  actorId: string;
  occurredAt: Date;
  action: TicketHistoryAction;
  changes: TicketHistoryChange[];
} & AuditInfo;
