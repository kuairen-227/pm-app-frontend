import { http } from "msw";
import type { Schemas } from "@/shared/types/api";
import { getDefaultBaseUrl } from "../utils/apiConfig";
import { MOCK_USER } from "../utils/mockData";
import { createMockResponse, type MockConfig } from "../utils/mockHelper";

const baseUrl = `${getDefaultBaseUrl()}/auth`;
const ACCESS_COOKIE = "accessToken" as const;
const REFRESH_COOKIE = "refreshToken" as const;

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

    const response = createMockResponse(
      body,
      (b) => (b as Schemas["LoginRequest"]).email === MOCK_USER.email,
      {
        userId: MOCK_USER.id,
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

    if (loginMockConfig.mode === "success") {
      response.headers.append(
        "Set-Cookie",
        `${ACCESS_COOKIE}=mock-access-token; Path=/; HttpOnly`,
      );
      response.headers.append(
        "Set-Cookie",
        `${REFRESH_COOKIE}=mock-refresh-token; Path=/; HttpOnly`,
      );
    }

    return response;
  },
);

/**
 * トークンのリフレッシュ API
 */
export const refreshHandler = http.post(
  `${baseUrl}/refresh`,
  async ({ cookies }) => {
    const refreshToken = cookies.refresh_token;

    return createMockResponse(
      refreshToken,
      (t) => t === "mock-refresh-token",
      undefined,
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
export const logoutHandler = http.post(`${baseUrl}/logout`, async () => {
  const response = createMockResponse(
    undefined,
    () => true,
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

  response.headers.append(
    "Set-Cookie",
    `${ACCESS_COOKIE}=; Path=/; HttpOnly; Max-Age=0`,
  );
  response.headers.append(
    "Set-Cookie",
    `${REFRESH_COOKIE}=; Path=/; HttpOnly; Max-Age=0`,
  );

  return response;
});
