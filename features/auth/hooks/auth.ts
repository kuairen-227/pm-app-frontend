import { useMutation } from "@tanstack/react-query";
import type { ApiError } from "@/shared/api/error";
import { login, logout, refreshToken } from "../api/auth";
import type {
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  RefreshRequest,
  RefreshResponse,
} from "../types/api";

export function useLogin() {
  return useMutation<LoginResponse, ApiError, LoginRequest>({
    mutationFn: login,
  });
}

export function useRefreshToken() {
  return useMutation<RefreshResponse, ApiError, RefreshRequest>({
    mutationFn: refreshToken,
  });
}

export function useLogout() {
  return useMutation<void, ApiError, LogoutRequest>({
    mutationFn: logout,
  });
}
