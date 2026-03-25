import { format } from "date-fns";

export function parseUtcDate(value: string): Date {
  return new Date(value);
}

export function parseDateOnly(value: string): Date {
  return new Date(`${value}T00:00:00`);
}

export function toISODate(date: Date): string {
  return format(date, "yyyy-MM-dd");
}

export function formatDate(date: Date): string {
  return format(date, "yyyy/MM/dd");
}

export function formatDateTime(date: Date): string {
  return format(date, "yyyy/MM/dd HH:mm");
}
