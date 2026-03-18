import { queryOptions } from "@tanstack/react-query";
import { getProject } from "../api/getProject";
import { listProjects } from "../api/listProjects";
import { projectQueryKeys } from "./projectQueryKeys";

export const projectQueries = {
  list: () =>
    queryOptions({
      queryKey: projectQueryKeys.list(),
      queryFn: listProjects,
    }),
  detail: (projectId: string) =>
    queryOptions({
      queryKey: projectQueryKeys.detail(projectId),
      queryFn: () => getProject(projectId),
    }),
};
