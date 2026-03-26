import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";
import { HTTP_METHOD } from "@/shared/consts/api";
import type { ProjectFormData } from "../../application/types/form";
import type { Project } from "../../domain/project";
import { toUpdateProjectRequest } from "../mappers/formToDto";
import { projectQueryKeys } from "../queries/projectQueryKeys";

type UpdateProjectInput = {
  projectId: Project["id"];
  data: ProjectFormData;
};

export function useUpdateProject() {
  const queryClient = useQueryClient();

  return useMutation<void, ApiError, UpdateProjectInput>({
    mutationFn: async ({ projectId, data }) => {
      const request = toUpdateProjectRequest(data);
      const response = await fetch(`/api/projects/${projectId}`, {
        method: HTTP_METHOD.PATCH,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      return response.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.list(),
      });
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.detail(variables.projectId),
      });
    },
  });
}
