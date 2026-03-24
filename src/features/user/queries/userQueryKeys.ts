import type { User } from "../types/user";

export const userQueryKeys = {
  all: ["users"] as const,

  lists: () => [...userQueryKeys.all, "list"] as const,
  list: (filters?: { page?: number }) =>
    [...userQueryKeys.lists(), filters] as const,

  details: () => [...userQueryKeys.all, "detail"] as const,
  detail: (userId: User["id"]) => [...userQueryKeys.details(), userId] as const,
};
