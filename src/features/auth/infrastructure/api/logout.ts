import { apiClient } from "@/shared/api/client";
import { DEFAULT_API_VERSION } from "@/shared/config/api";

export async function logout() {
  return apiClient.POST("/api/v{version}/auth/logout", {
    params: { path: { version: DEFAULT_API_VERSION } },
  });
}
