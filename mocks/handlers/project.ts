import { HttpResponse, http } from "msw";
import type {
  GetProjectResponse,
  ListProjectsResponse,
} from "@/features/project/types/api";
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

const getProjectConfig: MockConfig<GetProjectResponse> = {
  mode: "success",
  successStatus: 200,
  errorStatus: 404,
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

/**
 * プロジェクト単体取得 API
 */
export const getProjectHandler = http.get(
  `${baseUrl}/:id`,
  async ({ params }) => {
    const { id } = params;
    const project = mockProjects.find((p) => p.id === id);

    return createMockResponse(
      undefined,
      () => !!project,
      project,
      {},
      getProjectConfig,
    );
  },
);

/**
 * プロジェクト作成 API
 */
export const launchProjectHandler = http.post(baseUrl, async () => {
  const newProjectId = crypto.randomUUID();

  return new HttpResponse(null, {
    status: 201,
    headers: {
      Location: `${baseUrl}/${newProjectId}`,
    },
  });
});
