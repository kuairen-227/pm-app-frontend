import type { API_VERSION, HTTP_METHOD } from "../consts/api";
import type { components, operations } from "./open-api";

// API 関連
export type ApiVersion = (typeof API_VERSION)[keyof typeof API_VERSION];
export type HttpMethod = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD];

// OpenAPI の型をラップ
export type Schemas = components["schemas"];
export type ErrorResponse = Schemas["ErrorResponse"];

export type RequestBody<T extends keyof operations> =
  operations[T]["requestBody"] extends {
    content: { "application/json": infer R };
  }
    ? R
    : never;

export type ResponseBody<
  T extends keyof operations,
  Status extends keyof operations[T]["responses"],
> = operations[T]["responses"][Status] extends {
  content: { "application/json": infer R };
}
  ? R
  : never;
