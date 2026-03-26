import type { RequestDto, ResponseDto } from "@/shared/types/api";

export type ListProjectsRequest = RequestDto<"Projects_List">;
export type ListProjectsResponse = ResponseDto<"Projects_List", 200>;

export type GetProjectRequest = RequestDto<"Projects_GetById">;
export type GetProjectResponse = ResponseDto<"Projects_GetById", 200>;

export type LaunchProjectRequest = RequestDto<"Projects_Launch">;
export type LaunchProjectResponse = ResponseDto<"Projects_Launch", 201>;

export type UpdateProjectRequest = RequestDto<"Projects_Update">;
export type UpdateProjectResponse = ResponseDto<"Projects_Update", 204>;

export type DeleteProjectRequest = RequestDto<"Projects_Delete">;
export type DeleteProjectResponse = ResponseDto<"Projects_Delete", 204>;

export type InviteProjectMemberRequest = RequestDto<"Projects_InviteMember">;
export type InviteProjectMemberResponse = ResponseDto<
  "Projects_InviteMember",
  201
>;

export type ChangeProjectRoleRequest = RequestDto<"Projects_ChangeMemberRole">;
export type ChangeProjectRoleResponse = ResponseDto<
  "Projects_ChangeMemberRole",
  204
>;

export type RemoveProjectMemberRequest = RequestDto<"Projects_RemoveMember">;
export type RemoveProjectMemberResponse = ResponseDto<
  "Projects_RemoveMember",
  204
>;
