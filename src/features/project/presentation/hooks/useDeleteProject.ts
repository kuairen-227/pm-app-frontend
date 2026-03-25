import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";
import { HTTP_METHOD } from "@/shared/consts/api";
import type { Project } from "../../domain/project";
import { projectQueryKeys } from "../queries/projectQueryKeys";

export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation<void, ApiError, Project["id"]>({
    mutationFn: async (projectId) => {
      await fetch(`/api/projects/${projectId}`, {
        method: HTTP_METHOD.DELETE,
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.list(),
      });
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.detail(variables),
      });
    },
  });
}
