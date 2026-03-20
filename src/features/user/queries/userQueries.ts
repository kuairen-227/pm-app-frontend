import { queryOptions } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";
import { userQueryKeys } from "./userQueryKeys";

export const userQueries = {
  list: () =>
    queryOptions({
      queryKey: userQueryKeys.list(),
      queryFn: getUsers,
    }),
};
