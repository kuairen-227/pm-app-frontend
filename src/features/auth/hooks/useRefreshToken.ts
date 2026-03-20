import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";
import type { RefreshResponse } from "../types/api";

export function useRefreshToken() {
  return useMutation<RefreshResponse, ApiError>({
    mutationFn: async () => {
      const response = await fetch("/api/auth/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.json();
    },
  });
}
