import { parseDateOnly, parseUtcDate } from "@/shared/lib/datetime";
import type { PagedResult } from "@/shared/types/api";
import type { Ticket } from "../../domain/ticket";
import { TicketHistoryAction } from "../../domain/ticketHistoryAction";
import type { TicketHistoryChange } from "../../domain/ticketHistoryChange";
import type { TicketSchedule } from "../../domain/ticketSchedule";
import { TicketStatus } from "../../domain/ticketStatus";
import type { GetTicketResponse, ListTicketsResponse } from "../dto";

export function toTicketPageFromListDto(
  dto: ListTicketsResponse,
): PagedResult<Ticket> {
  return {
    items: dto.items.map(toTicketFromListDto),
    totalCount: dto.totalCount,
    pageNumber: dto.pageNumber,
    pageSize: dto.pageSize,
    totalPages: dto.totalPages,
  };
}

export function toTicketFromListDto(
  dto: ListTicketsResponse["items"][number],
): Ticket {
  return {
    id: dto.id,
    projectId: dto.projectId,
    title: dto.title,
    description: null,
    assigneeId: dto.assigneeId,
    status: toTicketStatus(dto.status),
    schedule: toTicketSchedule({
      startDate: dto.startDate,
      endDate: dto.endDate,
    }),
    completionCriteria: [],
    comments: [],
    histories: [],
    createdBy: dto.createdBy,
    createdAt: parseUtcDate(dto.createdAt),
    updatedBy: dto.updatedBy,
    updatedAt: parseUtcDate(dto.updatedAt),
  };
}

export function toTicketFromDetailDto(dto: GetTicketResponse): Ticket {
  return {
    id: dto.id,
    projectId: dto.projectId,
    title: dto.title,
    description: dto.description,
    assigneeId: dto.assigneeId,
    status: toTicketStatus(dto.status),
    schedule: toTicketSchedule({
      startDate: dto.startDate,
      endDate: dto.endDate,
    }),
    completionCriteria: dto.completionCriteria.map((c) => ({
      id: c.id,
      criterion: c.criterion,
      isCompleted: c.isCompleted,
      createdBy: c.createdBy,
      createdAt: parseUtcDate(c.createdAt),
      updatedBy: c.updatedBy,
      updatedAt: parseUtcDate(c.updatedAt),
    })),
    comments: dto.comments.map((c) => ({
      id: c.id,
      authorId: c.authorId,
      content: c.content,
      createdBy: c.createdBy,
      createdAt: parseUtcDate(c.createdAt),
      updatedBy: c.updatedBy,
      updatedAt: parseUtcDate(c.updatedAt),
    })),
    histories: dto.histories.map((h) => ({
      id: h.id,
      actorId: h.actorId,
      occurredAt: parseUtcDate(h.occurredAt),
      action: toTicketHistoryAction(h.action),
      changes: h.changes.map((c) => toTicketHistoryChange(c)),
      createdBy: h.createdBy,
      createdAt: parseUtcDate(h.createdAt),
      updatedBy: h.updatedBy,
      updatedAt: parseUtcDate(h.updatedAt),
    })),
    createdBy: dto.createdBy,
    createdAt: parseUtcDate(dto.createdAt),
    updatedBy: dto.updatedBy,
    updatedAt: parseUtcDate(dto.updatedAt),
  };
}

/**
 * [TicketStatus] DTO → ドメイン
 */
function toTicketStatus(dto: string): TicketStatus {
  const isValid = Object.values(TicketStatus).includes(dto as TicketStatus);
  if (!isValid) throw new Error(`Invalid ticket status: ${dto}`);

  return dto as TicketStatus;
}

/**
 * [TicketSchedule] DTO → ドメイン
 */
function toTicketSchedule(dto: {
  startDate: GetTicketResponse["startDate"];
  endDate: GetTicketResponse["endDate"];
}): TicketSchedule {
  return {
    startDate: dto.startDate ? parseDateOnly(dto.startDate) : null,
    endDate: dto.endDate ? parseDateOnly(dto.endDate) : null,
  };
}

/**
 * [TicketHistoryAction] DTO → ドメイン
 */
function toTicketHistoryAction(dto: string): TicketHistoryAction {
  const isValid = Object.values(TicketHistoryAction).includes(
    dto as TicketHistoryAction,
  );
  if (!isValid) throw new Error(`Invalid ticket history action: ${dto}`);

  return dto as TicketHistoryAction;
}

/**
 * [TicketHistoryChange] DTO → ドメイン
 */
function toTicketHistoryChange(
  dto: GetTicketResponse["histories"][number]["changes"][number],
): TicketHistoryChange {
  return {
    field: dto.field,
    before: dto.before ?? null,
    after: dto.after ?? null,
  };
}
