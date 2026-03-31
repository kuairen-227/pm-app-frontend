import { HttpResponse, type JsonBodyType } from "msw";
import { SORT_ORDER } from "@/shared/consts/api";
import { parseLiteral } from "@/shared/lib/parse";
import type { ErrorResponse, SortOrder } from "@/shared/types/api";

export type MockMode = "success" | "fail" | "custom";

export type MockConfig<T> = {
  mode: MockMode;
  successStatus: number;
  errorStatus: number;
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

  if (config.mode === "custom") {
    return HttpResponse.json(config.customResponses, {
      status: config.successStatus,
    });
  }

  if (isSuccess) {
    return HttpResponse.json(successResponse, {
      status: config.successStatus,
    });
  }

  return HttpResponse.json(errorResponse, {
    status: config.errorStatus,
  });
}

/**
 * ページネーションクエリの取得関数
 * @param url - リクエストURL
 * @returns ページネーション情報
 */
export function getPaginationParams(url: string) {
  const parsedUrl = new URL(url);
  const pageNumber =
    Number(parsedUrl.searchParams.get("pageNumber")) || undefined;
  const pageSize = Number(parsedUrl.searchParams.get("pageSize")) || undefined;
  const sortBy = parsedUrl.searchParams.get("sortBy") || undefined;
  const sortOrder =
    parseLiteral(
      parsedUrl.searchParams.get("sortOrder"),
      Object.values(SORT_ORDER) as SortOrder[],
    ) || undefined;

  return { pageNumber, pageSize, sortBy, sortOrder };
}

/**
 * ページネーション生成関数
 * @param items - 元データ配列
 * @param options - ページネーション情報
 */
export function createPaginatedResponse<T extends Record<string, unknown>>(
  items: T[],
  options?: {
    pageNumber?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: SortOrder;
  },
) {
  const pageNumber = options?.pageNumber ?? 1;
  const pageSize = options?.pageSize ?? items.length;
  const sortBy = options?.sortBy;
  const sortOrder = options?.sortOrder ?? "asc";

  // ソート処理
  const sortedItems = [...items];
  if (sortBy) {
    sortedItems.sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];

      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortOrder === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      }

      if (typeof aVal === "boolean" && typeof bVal === "boolean") {
        return sortOrder === "asc"
          ? Number(aVal) - Number(bVal)
          : Number(bVal) - Number(aVal);
      }

      // それ以外は文字列化して比較
      const aStr = String(aVal);
      const bStr = String(bVal);
      return sortOrder === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }

  // ページネーション
  const totalCount = sortedItems.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;
  const pagedItems = sortedItems.slice(start, end);

  return {
    items: pagedItems,
    totalCount,
    pageNumber,
    pageSize,
    totalPages,
    hasNextPage: pageNumber < totalPages,
    hasPreviousPage: pageNumber > 1,
  };
}
