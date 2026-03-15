import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";
import { login, logout, refreshToken } from "../api/auth";
import type {
  LoginRequest,
  LoginResponse,
  RefreshResponse,
} from "../types/api";

export function useLogin() {
  return useMutation<LoginResponse, ApiError, LoginRequest>({
    mutationFn: login,
  });
}

export function useRefreshToken() {
  return useMutation<RefreshResponse, ApiError>({
    mutationFn: refreshToken,
  });
}

export function useLogout() {
  return useMutation<void, ApiError>({
    mutationFn: logout,
  });
}
