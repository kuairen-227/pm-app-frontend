import { HttpResponse, http } from "msw";
import type {
  DeleteProjectResponse,
  GetProjectResponse,
  ListProjectsResponse,
  UpdateProjectResponse,
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

const updateProjectConfig: MockConfig<UpdateProjectResponse> = {
  mode: "success",
  successStatus: 204,
  errorStatus: 400,
};

const deleteProjectConfig: MockConfig<DeleteProjectResponse> = {
  mode: "success",
  successStatus: 204,
  errorStatus: 404,
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
  `${baseUrl}/:projectId`,
  async ({ params }) => {
    const { projectId } = params;
    const project = mockProjects.find((p) => p.id === projectId);

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

/**
 * プロジェクト編集 API
 */
export const updateProjectHandler = http.patch(
  `${baseUrl}/:projectId`,
  async () => {
    return createMockResponse(
      undefined,
      () => true,
      undefined,
      {},
      updateProjectConfig,
    );
  },
);

/**
 * プロジェクト削除 API
 */
export const deleteProjectHandler = http.delete(
  `${baseUrl}/:projectId`,
  async ({ params }) => {
    const { projectId } = params;
    const project = mockProjects.find((p) => p.id === projectId);

    return createMockResponse(
      undefined,
      () => !!project,
      undefined,
      {},
      deleteProjectConfig,
    );
  },
);
