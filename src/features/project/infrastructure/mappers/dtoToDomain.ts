import type { Project } from "../../domain/project";
import type { GetProjectResponse, ListProjectsResponse } from "../dto";

export function toProjectFromList(dto: ListProjectsResponse[number]): Project {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    createdBy: dto.createdBy,
    createdAt: new Date(dto.createdAt),
    updatedBy: dto.updatedBy,
    updatedAt: new Date(dto.updatedAt),
  };
}

export function toProjectFromDetail(dto: GetProjectResponse): Project {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    members: dto.members.map((m) => ({
      userId: m.userId,
      projectRole: m.projectRole,
      createdBy: m.createdBy,
      createdAt: new Date(m.createdAt),
      updatedBy: m.updatedBy,
      updatedAt: new Date(m.updatedAt),
    })),
    createdBy: dto.createdBy,
    createdAt: new Date(dto.createdAt),
    updatedBy: dto.updatedBy,
    updatedAt: new Date(dto.updatedAt),
  };
}
