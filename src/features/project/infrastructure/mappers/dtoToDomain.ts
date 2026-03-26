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

export function toProjectFromDetail(dto: GetProjectResponse) {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description,
    members: dto.members,
    createdBy: dto.createdBy,
    createdAt: new Date(dto.createdAt),
    updatedBy: dto.updatedBy,
    updatedAt: new Date(dto.updatedAt),
  };
}
