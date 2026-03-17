import type { RequestBody, ResponseBody } from "@/shared/types/api";

export type ListProjectsRequest = RequestBody<"Projects_List">;
export type ListProjectsResponse = ResponseBody<"Projects_List", 200>;
