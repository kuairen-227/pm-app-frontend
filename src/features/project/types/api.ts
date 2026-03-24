import type { RequestBody, ResponseBody } from "@/shared/types/api";

export type ListProjectsRequest = RequestBody<"Projects_List">;
export type ListProjectsResponse = ResponseBody<"Projects_List", 200>;

export type GetProjectRequest = RequestBody<"Projects_GetById">;
export type GetProjectResponse = ResponseBody<"Projects_GetById", 200>;

export type LaunchProjectRequest = RequestBody<"Projects_Launch">;
export type LaunchProjectResponse = ResponseBody<"Projects_Launch", 201>;

export type UpdateProjectRequest = RequestBody<"Projects_Update">;
export type UpdateProjectResponse = ResponseBody<"Projects_Update", 204>;

export type DeleteProjectRequest = RequestBody<"Projects_Delete">;
export type DeleteProjectResponse = ResponseBody<"Projects_Delete", 204>;

export type InviteProjectMemberRequest = RequestBody<"Projects_InviteMember">;
export type InviteProjectMemberResponse = ResponseBody<
  "Projects_InviteMember",
  201
>;

export type ChangeProjectRoleRequest = RequestBody<"Projects_ChangeMemberRole">;
export type ChangeProjectRoleResponse = ResponseBody<
  "Projects_ChangeMemberRole",
  204
>;

export type RemoveProjectMemberRequest = RequestBody<"Projects_RemoveMember">;
export type RemoveProjectMemberResponse = ResponseBody<
  "Projects_RemoveMember",
  204
>;
