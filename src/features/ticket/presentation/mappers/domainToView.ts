import { formatDateTimeJST } from "@/shared/lib/datetime";
import type { PagedResult } from "@/shared/types/api";
import type { Ticket } from "../../domain/ticket";
import type { TicketDetailView, TicketListView } from "../types/view";

export function toTicketListView(page: PagedResult<Ticket>): TicketListView {
  return {
    items: page.items.map((ticket) => ({
      id: ticket.id,
      projectId: ticket.projectId,
      title: ticket.title,
      assigneeId: ticket.assigneeId,
      status: ticket.status,
      startDate: ticket.schedule.startDate
        ? formatDateTimeJST(ticket.schedule.startDate)
        : null,
      endDate: ticket.schedule.endDate
        ? formatDateTimeJST(ticket.schedule.endDate)
        : null,
      createdBy: ticket.createdBy,
      createdAt: formatDateTimeJST(ticket.createdAt),
      updatedBy: ticket.updatedBy,
      updatedAt: formatDateTimeJST(ticket.updatedAt),
    })),
    totalCount: page.totalCount,
    pageNumber: page.pageNumber,
    pageSize: page.pageSize,
    totalPages: page.totalPages,
  };
}

export function toTicketDetailView(ticket: Ticket): TicketDetailView {
  return {
    id: ticket.id,
    projectId: ticket.projectId,
    title: ticket.title,
    description: ticket.description,
    assigneeId: ticket.assigneeId,
    status: ticket.status,
    startDate: ticket.schedule.startDate
      ? formatDateTimeJST(ticket.schedule.startDate)
      : null,
    endDate: ticket.schedule.endDate
      ? formatDateTimeJST(ticket.schedule.endDate)
      : null,
    completionCriteria: ticket.completionCriteria.map((c) => ({
      id: c.id,
      criterion: c.criterion,
      isCompleted: c.isCompleted,
      createdBy: c.createdBy,
      createdAt: formatDateTimeJST(c.createdAt),
      updatedBy: c.updatedBy,
      updatedAt: formatDateTimeJST(c.updatedAt),
    })),
    comments: ticket.comments.map((c) => ({
      id: c.id,
      authorId: c.authorId,
      content: c.content,
      createdBy: c.createdBy,
      createdAt: formatDateTimeJST(c.createdAt),
      updatedBy: c.updatedBy,
      updatedAt: formatDateTimeJST(c.updatedAt),
    })),
    histories: ticket.histories.map((h) => ({
      id: h.id,
      actorId: h.actorId,
      occurredAt: formatDateTimeJST(h.occurredAt),
      action: h.action,
      changes: h.changes.map((c) => ({
        field: c.field,
        before: c.before,
        after: c.after,
      })),
      createdBy: h.createdBy,
      createdAt: formatDateTimeJST(h.createdAt),
      updatedBy: h.updatedBy,
      updatedAt: formatDateTimeJST(h.updatedAt),
    })),
    createdBy: ticket.createdBy,
    createdAt: formatDateTimeJST(ticket.createdAt),
    updatedBy: ticket.updatedBy,
    updatedAt: formatDateTimeJST(ticket.updatedAt),
  };
}
