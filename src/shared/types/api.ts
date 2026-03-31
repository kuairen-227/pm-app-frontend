import type { API_VERSION, HTTP_METHOD, SORT_ORDER } from "../consts/api";
import type { components, operations } from "./open-api";

// API 関連
export type ApiVersion = (typeof API_VERSION)[keyof typeof API_VERSION];
export type HttpMethod = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD];
export type SortOrder = (typeof SORT_ORDER)[keyof typeof SORT_ORDER];
export type PagedResult<T> = {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
};

// OpenAPI の型をラップ
export type Schemas = components["schemas"];
export type ErrorResponse = components["schemas"]["ErrorResponse"];

// Utility Types
type Empty = Record<string, never>;
// biome-ignore lint/complexity/noBannedTypes: never 等では交差型との相性が悪く代替できないため
type Clean<T> = [T] extends [Empty | never] ? {} : T;
type RemoveVersion<T> = T extends { version: string } ? Omit<T, "version"> : T;
type Merge<T> = {
  [K in keyof T]: T[K];
};

// Request DTO
type RequestPathParams<T extends keyof operations> = operations[T] extends {
  parameters: { path: infer P };
}
  ? RemoveVersion<P>
  : Empty;

type RequestQueryParams<T extends keyof operations> = operations[T] extends {
  parameters: infer P;
}
  ? P extends { query?: infer QQ }
    ? QQ extends never | undefined // never の場合は空オブジェクトに変換
      ? Empty
      : QQ
    : Empty
  : Empty;

type RequestBody<T extends keyof operations> = operations[T] extends {
  requestBody: {
    content: { "application/json": infer B };
  };
}
  ? B
  : Empty;

export type RequestDto<T extends keyof operations> = Merge<
  Clean<RequestPathParams<T>> &
    Clean<RequestQueryParams<T>> &
    Clean<RequestBody<T>>
>;

// Response DTO
export type ResponseDto<
  T extends keyof operations,
  Status extends keyof operations[T]["responses"],
> = operations[T]["responses"][Status] extends {
  content: { "application/json": infer R };
}
  ? R
  : never;
