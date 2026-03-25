import { formatDateTime } from "@/shared/lib/date";
import type { Project } from "../domain/project";
import type { ProjectDetailView, ProjectListView } from "../types/view";

export function toProjectListView(project: Project): ProjectListView {
  return {
    id: project.id,
    name: project.name,
    description: project.description,
    createdBy: project.createdBy,
    createdAt: formatDateTime(project.createdAt),
    updatedBy: project.updatedBy,
    updatedAt: formatDateTime(project.updatedAt),
  };
}

export function toProjectDetailView(project: Project): ProjectDetailView {
  return {
    id: project.id,
    name: project.name,
    description: project.description,
    members: project.members?.map((m) => ({
      userId: m.userId,
      projectRole: m.projectRole,
    })),
    createdBy: project.createdBy,
    createdAt: formatDateTime(project.createdAt),
    updatedBy: project.updatedBy,
    updatedAt: formatDateTime(project.updatedAt),
  };
}
