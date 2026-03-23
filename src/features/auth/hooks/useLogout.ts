import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";
import { HTTP_METHOD } from "@/shared/consts/api";

export function useLogout() {
  return useMutation<void, ApiError>({
    mutationFn: async () => {
      const response = await fetch("/api/auth/logout", {
        method: HTTP_METHOD.POST,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.json();
    },
  });
}
