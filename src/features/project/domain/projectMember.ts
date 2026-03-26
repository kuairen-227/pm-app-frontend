import type { AuditInfo } from "@/shared/types/domain";
import type { ProjectRole } from "./projectRole";

export type ProjectMember = {
  userId: string;
  projectRole: ProjectRole;
} & AuditInfo;
