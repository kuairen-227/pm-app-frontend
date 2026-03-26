import type { AuditInfo } from "@/shared/types/domain";
import type { TicketComment } from "./ticketComment";
import type { TicketCompletionCriterion } from "./ticketCompletionCriterion";
import type { TicketHistory } from "./ticketHistory";
import type { TicketSchedule } from "./ticketSchedule";
import type { TicketStatus } from "./ticketStatus";

export type Ticket = {
  id: string;
  projectId: string;
  title: string;
  description: string;
  assigneeId: string | null;
  status: TicketStatus;
  schedule: TicketSchedule;
  completionCriteria: TicketCompletionCriterion[];
  comments: TicketComment[];
  histories: TicketHistory[];
} & AuditInfo;
