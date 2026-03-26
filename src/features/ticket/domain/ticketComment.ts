import type { AuditInfo } from "@/shared/types/domain";

export type TicketComment = {
  id: string;
  authorId: string;
  content: string;
} & AuditInfo;
