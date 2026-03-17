import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";
import type {
  LoginRequest,
  LoginResponse,
  RefreshResponse,
} from "../types/api";

export function useLogin() {
  return useMutation<LoginResponse, ApiError, LoginRequest>({
    mutationFn: async (input: LoginRequest) => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      return response.json();
    },
  });
}

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
