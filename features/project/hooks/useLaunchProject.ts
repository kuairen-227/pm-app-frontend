import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "next/dist/server/api-utils";
import { launchProject } from "../api/launchProject";
import type { LaunchProjectRequest } from "../types/api";

export function useLaunchProject() {
  return useMutation<void, ApiError, LaunchProjectRequest>({
    mutationFn: async (input: LaunchProjectRequest) => {
      await launchProject(input);
    },
  });
}
