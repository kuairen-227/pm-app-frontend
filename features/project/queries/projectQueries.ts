import { queryOptions } from "@tanstack/react-query";
import { listProjects } from "../api/listProjects";
import { projectQueryKeys } from "./projectQueryKeys";

export const projectQueries = {
  list: () =>
    queryOptions({
      queryKey: projectQueryKeys.list(),
      queryFn: listProjects,
    }),
};
