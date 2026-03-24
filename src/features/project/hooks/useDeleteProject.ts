// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import type { ApiError } from "@/shared/api/error";
// import { HTTP_METHOD } from "@/shared/consts/api";
// import { projectQueryKeys } from "../queries/projectQueryKeys";
// import type { UpdateProjectResponse } from "../types/api";
// import { toLaunchProjectRequest } from "../types/mapper";

// export function useDeleteProject() {
//   const queryClient = useQueryClient();

//   return useMutation<UpdateProjectResponse, ApiError, string>({
//     mutationFn: async (input) => {
//       const request = toLaunchProjectRequest(input);
//       const response = await fetch(`/api/projects/${projectId}`, {
//         method: HTTP_METHOD.DELETE,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(request),
//       });

//       return response.json();
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: projectQueryKeys.base(),
//       });
//     },
//   });
// }
