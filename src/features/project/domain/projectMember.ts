import type { ProjectRole } from "./projectRole";

export type ProjectMember = {
  userId: string;
  projectRole: ProjectRole;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
};
