import type { Project } from "../types/project";

export const projectQueryKeys = {
  base: () => ["projects"] as const,

  list: () => [...projectQueryKeys.base(), "list"] as const,
  detail: (projectId: Project["id"]) =>
    [...projectQueryKeys.base(), "detail", projectId] as const,
};
