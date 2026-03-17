import { apiClient } from "@/shared/api/client";
import { DEFAULT_API_VERSION } from "@/shared/config/api";

export async function refreshToken() {
  return apiClient.POST("/api/v{version}/auth/refresh", {
    params: { path: { version: DEFAULT_API_VERSION } },
  });
}
