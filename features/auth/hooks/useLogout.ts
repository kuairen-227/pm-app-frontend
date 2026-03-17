import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";

export function useLogout() {
  return useMutation<void, ApiError>({
    mutationFn: async () => {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.json();
    },
  });
}
