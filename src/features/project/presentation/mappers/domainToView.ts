import { formatDateTimeJST } from "@/shared/lib/datetime";
import type {
  ProjectDetailView,
  ProjectListView,
} from "../../application/types/view";
import type { Project } from "../../domain/project";

export function toProjectListView(project: Project): ProjectListView {
  return {
    id: project.id,
    name: project.name,
    description: project.description,
    createdBy: project.createdBy,
    createdAt: formatDateTimeJST(project.createdAt),
    updatedBy: project.updatedBy,
    updatedAt: formatDateTimeJST(project.updatedAt),
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
    createdAt: formatDateTimeJST(project.createdAt),
    updatedBy: project.updatedBy,
    updatedAt: formatDateTimeJST(project.updatedAt),
  };
}
