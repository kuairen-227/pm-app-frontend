import { http } from "msw";
import type { Schemas } from "@/shared/types/api";
import { getDefaultBaseUrl } from "../utils/apiConfig";
import { MOCK_USER } from "../utils/mockData";
import { createMockResponse, type MockConfig } from "../utils/mockHelper";

const baseUrl = `${getDefaultBaseUrl()}/auth`;

const loginMockConfig: MockConfig<Schemas["LoginResponse"]> = {
  mode: "success",
  status: 200,
  customResponses: {},
};

const refreshMockConfig: MockConfig<Schemas["LoginResponse"]> = {
  mode: "success",
  status: 200,
  customResponses: {},
};

const logoutMockConfig: MockConfig<undefined> = {
  mode: "success",
  status: 200,
  customResponses: undefined,
};

/**
 * ログイン API
 */
export const loginHandler = http.post(
  `${baseUrl}/login`,
  async ({ request }) => {
    const body = (await request.json()) as Schemas["LoginRequest"];

    return createMockResponse(
      body,
      (b) => (b as Schemas["LoginRequest"]).email === MOCK_USER.email,
      {
        userId: MOCK_USER.id,
        accessToken: "mock-access-token",
        refreshToken: "mock-refresh-token",
      },
      {
        error: {
          code: "APPLICATION.INVALID_CREDENTIAL",
          message: "メールアドレスまたはパスワードが正しくありません。",
          traceId: `trace-mock-login-${Date.now()}`,
        },
      },
      loginMockConfig,
    );
  },
);

/**
 * トークンのリフレッシュ API
 */
export const refreshHandler = http.post(
  `${baseUrl}/refresh`,
  async ({ request }) => {
    const body = (await request.json()) as Schemas["RefreshRequest"];

    return createMockResponse(
      body,
      (b) =>
        (b as Schemas["RefreshRequest"]).refreshToken === "mock-refresh-token",
      {
        userId: MOCK_USER.id,
        accessToken: "mock-access-token-new",
        refreshToken: "mock-refresh-token",
      },
      {
        error: {
          code: "APPLICATION.INVALID_REFRESH_TOKEN",
          message: "リフレッシュトークンが無効です。",
          traceId: `trace-mock-refresh-${Date.now()}`,
        },
      },
      refreshMockConfig,
    );
  },
);

/**
 * ログアウト API
 */
export const logoutHandler = http.post(
  `${baseUrl}/logout`,
  async ({ request }) => {
    const body = (await request.json()) as Schemas["LogoutRequest"];

    return createMockResponse(
      body,
      (b) =>
        (b as Schemas["LogoutRequest"]).refreshToken === "mock-refresh-token",
      undefined,
      {
        error: {
          code: "APPLICATION.INVALID_REFRESH_TOKEN",
          message: "リフレッシュトークンが無効です。",
          traceId: `trace-mock-logout-${Date.now()}`,
        },
      },
      logoutMockConfig,
    );
  },
);
