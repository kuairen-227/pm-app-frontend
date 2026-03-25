import { queryOptions } from "@tanstack/react-query";
import type { Project } from "../../domain/project";
import { projectQueryKeys } from "./projectQueryKeys";

export const projectQueries = {
  list: () =>
    queryOptions({
      queryKey: projectQueryKeys.list(),
      queryFn: async () => {
        const response = await fetch("/api/projects");
        return response.json();
      },
    }),
  detail: (projectId: Project["id"]) =>
    queryOptions({
      queryKey: projectQueryKeys.detail(projectId),
      queryFn: async () => {
        const response = await fetch(`/api/projects/${projectId}`);
        return response.json();
      },
    }),
};
