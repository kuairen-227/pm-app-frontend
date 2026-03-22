import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ApiError } from "next/dist/server/api-utils";
import { projectQueryKeys } from "../queries/projectQueryKeys";
import type { ProjectFormData } from "../types/form";
import { toLaunchProjectRequest } from "../types/mapper";

type LaunchProjectResponse = {
  projectId: string;
};

export function useLaunchProject() {
  const queryClient = useQueryClient();

  return useMutation<LaunchProjectResponse, ApiError, ProjectFormData>({
    mutationFn: async (input) => {
      const request = toLaunchProjectRequest(input);
      const response = await fetch("/api/projects", {
        method: "POST",
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
