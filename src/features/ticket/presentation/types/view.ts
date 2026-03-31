import type { PagedResult } from "@/shared/types/api";

export type TicketListView = PagedResult<{
  id: string;
  projectId: string;
  title: string;
  assigneeId?: string | null;
  status: string;
  startDate?: string | null;
  endDate?: string | null;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
}>;

export type TicketDetailView = {
  id: string;
  projectId: string;
  title: string;
  description: string | null;
  assigneeId?: string | null;
  status: string;
  startDate?: string | null;
  endDate?: string | null;
  completionCriteria: {
    id: string;
    criterion: string;
    isCompleted: boolean;
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
  }[];
  comments: {
    id: string;
    authorId: string;
    content: string;
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
  }[];
  histories: {
    id: string;
    actorId: string;
    occurredAt: string;
    action: string;
    changes: {
      field: string;
      before: string | null;
      after: string | null;
    }[];
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
  }[];
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
};
