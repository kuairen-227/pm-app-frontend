import { useQuery } from "@tanstack/react-query";
import { projectQueries } from "../queries/projectQueries";

export function useProject(projectId: string) {
  return useQuery(projectQueries.detail(projectId));
}
