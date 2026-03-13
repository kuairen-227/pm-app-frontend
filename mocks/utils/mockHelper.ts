import { HttpResponse, type JsonBodyType } from "msw";
import type { ErrorResponse } from "@/shared/types/api";

export type MockMode = "success" | "fail" | "custom";

export type MockConfig<T> = {
  mode: MockMode;
  status: number;
  customResponses?: Partial<T>;
};

/**
 * モックレスポンス生成関数
 * @param body - リクエストボディ
 * @param isValid - 成功判定関数
 * @param successResponse - 成功時レスポンス
 * @param errorResponse - エラー時レスポンス
 * @param config - モック設定
 */
export function createMockResponse<T extends JsonBodyType | undefined>(
  body: unknown,
  isValid: (body: unknown) => boolean,
  successResponse: T,
  errorResponse: ErrorResponse,
  config: MockConfig<T>,
) {
  const isSuccess = config.mode === "success" && isValid(body);
  const response =
    config.mode === "custom"
      ? { ...config.customResponses }
      : isSuccess
        ? successResponse
        : errorResponse;

  return HttpResponse.json(response, { status: config.status });
}
