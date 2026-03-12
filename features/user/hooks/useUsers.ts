import { useQuery } from "@tanstack/react-query";
import { userQueries } from "../queries/userQueries";

export function useUsers() {
  return useQuery(userQueries.list());
}
