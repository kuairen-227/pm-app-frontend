import { apiClient } from "@/shared/api/client";
import { checkApiError, checkApiResponse } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type {
  GetCurrentUserResponse,
  LoginRequest,
  LoginResponse,
  RefreshResponse,
} from "../types/api";

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
}

export async function refreshToken(): Promise<RefreshResponse> {
  const { response, data, error } = await apiClient.POST(
    "/api/v{version}/auth/refresh",
    {
      params: { path: { version: DEFAULT_API_VERSION } },
    },
  );

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}

export async function logout(): Promise<void> {
  const { response, error } = await apiClient.POST(
    "/api/v{version}/auth/logout",
    {
      params: { path: { version: DEFAULT_API_VERSION } },
    },
  );

  checkApiError(response, error);
}

export async function getCurrentUser(): Promise<GetCurrentUserResponse | null> {
  const { response, data, error } = await apiClient.GET(
    "/api/v{version}/auth/me",
    {
      params: { path: { version: DEFAULT_API_VERSION } },
    },
  );

  if (response.status === 401) return null;

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}
