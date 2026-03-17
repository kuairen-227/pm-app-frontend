import { apiClient } from "@/shared/api/client";
import { DEFAULT_API_VERSION } from "@/shared/config/api";
import type { LoginRequest } from "../types/api";

export async function login(body: LoginRequest) {
  return apiClient.POST("/api/v{version}/auth/login", {
    params: { path: { version: DEFAULT_API_VERSION } },
    body,
  });
}
