import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";
import { HTTP_METHOD } from "@/shared/consts/api";
import { projectQueryKeys } from "../queries/projectQueryKeys";
import type { ProjectFormData } from "../types/form";
import { toUpdateProjectRequest } from "../types/mapper";
import type { Project } from "../types/project";

export function useUpdateProject(projectId: Project["id"]) {
  const queryClient = useQueryClient();

  return useMutation<undefined, ApiError, ProjectFormData>({
    mutationFn: async (input) => {
      const request = toUpdateProjectRequest(input);
      const response = await fetch(`/api/projects/${projectId}`, {
        method: HTTP_METHOD.PATCH,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.list(),
      });
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.detail(projectId),
      });
    },
  });
}
