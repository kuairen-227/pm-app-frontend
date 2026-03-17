import { useQuery } from "@tanstack/react-query";
import { projectQueries } from "../queries/projectQueries";

export function useProjects() {
  return useQuery(projectQueries.list());
}
