import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";
import { HTTP_METHOD } from "@/shared/consts/api";
import type { LoginRequest, LoginResponse } from "../../infrastructure/dto";

export function useLogin() {
  return useMutation<LoginResponse, ApiError, LoginRequest>({
    mutationFn: async (input: LoginRequest) => {
      const response = await fetch("/api/auth/login", {
        method: HTTP_METHOD.POST,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      return response.json();
    },
  });
}
