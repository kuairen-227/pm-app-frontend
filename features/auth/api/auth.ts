import { apiClient } from "@/shared/api/client";
import { checkApiError, checkApiResponse } from "@/shared/api/error";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type {
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  RefreshRequest,
  RefreshResponse,
} from "../types/api";

export async function login(body: LoginRequest): Promise<LoginResponse> {
  const { response, data, error } = await apiClient.POST(
    "/api/v{version}/auth/login",
    {
      params: { path: { version: DEFAULT_API_VERSION } },
      body,
    },
  );

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}

export async function refreshToken(
  body: RefreshRequest,
): Promise<RefreshResponse> {
  const { response, data, error } = await apiClient.POST(
    "/api/v{version}/auth/refresh",
    {
      params: { path: { version: DEFAULT_API_VERSION } },
      body,
    },
  );

  checkApiError(response, error);
  checkApiResponse(data);

  return data;
}

export async function logout(body: LogoutRequest): Promise<void> {
  const { response, error } = await apiClient.POST(
    "/api/v{version}/auth/logout",
    {
      params: { path: { version: DEFAULT_API_VERSION } },
      body,
    },
  );

  checkApiError(response, error);
}
