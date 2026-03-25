import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

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

export function formatDateTimeJST(date: Date): string {
  return formatInTimeZone(date, "Asia/Tokyo", "yyyy/MM/dd HH:mm");
}
