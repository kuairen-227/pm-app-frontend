import type { HTTP_METHOD } from "../consts/api";

export type HttpMethod = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD];
