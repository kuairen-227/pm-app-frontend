import type { AuditInfo } from "@/shared/types/domain";

export type TicketCompletionCriterion = {
  id: string;
  criterion: string;
  isCompleted: boolean;
} & AuditInfo;
