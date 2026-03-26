import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";
import { HTTP_METHOD } from "@/shared/consts/api";
import type { RefreshResponse } from "../../infrastructure/dto";

export function useRefreshToken() {
  return useMutation<RefreshResponse, ApiError>({
    mutationFn: async () => {
      const response = await fetch("/api/auth/refresh", {
        method: HTTP_METHOD.POST,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.json();
    },
  });
}
