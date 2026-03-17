import { http } from "msw";
import type {
  GetCurrentUserResponse,
  LoginRequest,
  LoginResponse,
  RefreshResponse,
} from "@/features/auth/types/api";
import { getDefaultBaseUrl } from "../utils/apiConfig";
import { MOCK_USER } from "../utils/mockData";
import { createMockResponse, type MockConfig } from "../utils/mockHelper";

const baseUrl = `${getDefaultBaseUrl()}/auth`;
const ACCESS_COOKIE = "access_token" as const;
const REFRESH_COOKIE = "refresh_token" as const;

const loginMockConfig: MockConfig<LoginResponse> = {
  mode: "success",
  successStatus: 200,
  errorStatus: 401,
  customResponses: {},
};

const refreshMockConfig: MockConfig<RefreshResponse> = {
  mode: "success",
  successStatus: 200,
  errorStatus: 401,
  customResponses: {},
};

const logoutMockConfig: MockConfig<undefined> = {
  mode: "success",
  successStatus: 200,
  errorStatus: 401,
  customResponses: undefined,
};

const getCurrentUserMockConfig: MockConfig<GetCurrentUserResponse> = {
  mode: "success",
  successStatus: 200,
  errorStatus: 401,
  customResponses: {},
};

/**
 * ログイン API
 */
export const loginHandler = http.post(
  `${baseUrl}/login`,
  async ({ request }) => {
    const body = (await request.json()) as LoginRequest;

    const response = createMockResponse(
      body,
      (b) => (b as LoginRequest).email === MOCK_USER.email,
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
    const refreshToken = cookies[REFRESH_COOKIE];

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

/**
 * ログインユーザー取得 API
 */
export const getCurrentUserHandler = http.get(
  `${baseUrl}/me`,
  async ({ cookies }) => {
    const accessToken = cookies[ACCESS_COOKIE];
    console.log("accessToken: ", accessToken);

    return createMockResponse(
      accessToken,
      (t) => t === "mock-access-token",
      {
        id: MOCK_USER.id,
        name: MOCK_USER.name,
        email: MOCK_USER.email,
        role: MOCK_USER.role,
        createdBy: undefined,
        createdAt: undefined,
        updatedBy: undefined,
        updatedAt: undefined,
      },
      {
        error: {
          code: "AUTH.UNAUTHORIZED",
          message: "認証されていません。",
          traceId: `trace-mock-me-${Date.now()}`,
        },
      },
      getCurrentUserMockConfig,
    );
  },
);
