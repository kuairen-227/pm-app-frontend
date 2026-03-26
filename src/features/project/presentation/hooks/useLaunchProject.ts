import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ApiError } from "next/dist/server/api-utils";
import { HTTP_METHOD } from "@/shared/consts/api";
import type { ProjectFormData } from "../../application/types/form";
import type { Project } from "../../domain/project";
import { toLaunchProjectRequest } from "../mappers/formToDto";
import { projectQueryKeys } from "../queries/projectQueryKeys";

export function useLaunchProject() {
  const queryClient = useQueryClient();

  return useMutation<Project["id"], ApiError, ProjectFormData>({
    mutationFn: async (data) => {
      const request = toLaunchProjectRequest(data);
      const response = await fetch("/api/projects", {
        method: HTTP_METHOD.POST,
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
    },
  });
}
