import type { ErrorResponse } from "../types/api";

export class ApiError extends Error {
  constructor(
    public status: number,
    public code?: string,
    public traceId?: string,
    message?: string,
  ) {
    super(message ?? `API Error: ${status}`);
  }
}

export function checkApiError(response: Response, error?: ErrorResponse): void {
  if (error) {
    const errData = error.error;

    throw new ApiError(
      response.status,
      errData?.code,
      errData?.traceId,
      errData?.message,
    );
  }
}

export function checkApiResponse<T>(data: T | undefined): asserts data is T {
  if (data === undefined) {
    throw new ApiError(
      500,
      undefined,
      undefined,
      "レスポンスボディがありません。",
    );
  }
}
