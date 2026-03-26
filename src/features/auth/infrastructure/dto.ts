import type { RequestDto, ResponseDto } from "@/shared/types/api";

export type LoginRequest = RequestDto<"Auth_Login">;
export type LoginResponse = ResponseDto<"Auth_Login", 200>;

export type RefreshRequest = RequestDto<"Auth_Refresh">;
export type RefreshResponse = ResponseDto<"Auth_Refresh", 200>;

export type GetCurrentUserRequest = RequestDto<"Auth_GetMe">;
export type GetCurrentUserResponse = ResponseDto<"Auth_GetMe", 200>;
