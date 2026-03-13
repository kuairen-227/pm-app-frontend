import type { API_VERSION, HTTP_METHOD } from "../consts/api";

export type ApiVersion = (typeof API_VERSION)[keyof typeof API_VERSION];
export type HttpMethod = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD];
