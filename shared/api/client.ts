import createClient from "openapi-fetch";
import { env } from "../config/env";
import type { paths } from "../types/open-api";

export const apiClient = createClient<paths>({
  baseUrl: `${env.NEXT_PUBLIC_API_BASE_URL}`,
  credentials: "include",
});
