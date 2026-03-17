import { http } from "msw";
import type { ListProjectsResponse } from "@/features/project/types/api";
import { mockProjects } from "../data/projects";
import { getDefaultBaseUrl } from "../utils/apiConfig";
import { createMockResponse, type MockConfig } from "../utils/mockHelper";

const baseUrl = `${getDefaultBaseUrl()}/projects`;

const listProjectsConfig: MockConfig<ListProjectsResponse> = {
  mode: "success",
  successStatus: 200,
  errorStatus: 401,
  customResponses: undefined,
};

/**
 * プロジェクト一覧取得 API
 */
export const listProjectsHandler = http.get(baseUrl, async () => {
  return createMockResponse(
    undefined,
    () => true,
    mockProjects,
    {},
    listProjectsConfig,
  );
});
