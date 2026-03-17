import type { RequestBody, ResponseBody } from "@/shared/types/api";

export type LoginRequest = RequestBody<"Auth_Login">;
export type LoginResponse = ResponseBody<"Auth_Login", 200>;
export type RefreshResponse = ResponseBody<"Auth_Refresh", 200>;
export type GetCurrentUserResponse = ResponseBody<"Auth_GetMe", 200>;
