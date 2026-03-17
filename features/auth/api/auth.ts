import { apiClient } from "@/shared/api/client";
import { checkApiError, checkApiResponse } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { GetCurrentUserResponse, LoginRequest } from "../types/api";

export async function login(body: LoginRequest) {
  return apiClient.POST("/api/v{version}/auth/login", {
    params: { path: { version: DEFAULT_API_VERSION } },
    body,
  });
}

export async function refreshToken() {
  return apiClient.POST("/api/v{version}/auth/refresh", {
    params: { path: { version: DEFAULT_API_VERSION } },
  });
}

export async function logout() {
  return apiClient.POST("/api/v{version}/auth/logout", {
    params: { path: { version: DEFAULT_API_VERSION } },
  });
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
