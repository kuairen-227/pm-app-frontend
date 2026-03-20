import { apiClient } from "@/shared/api/client";
import { DEFAULT_API_VERSION } from "@/shared/config/api";

export async function getUsers() {
  const { data, error } = await apiClient.GET("/api/v{version}/users", {
    params: { path: { version: DEFAULT_API_VERSION } },
  });

  if (error) {
    throw error;
  }

  return data;
}
