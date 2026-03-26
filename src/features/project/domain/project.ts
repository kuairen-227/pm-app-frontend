import type { AuditInfo } from "@/shared/types/domain";
import type { ProjectMember } from "./projectMember";

export type Project = {
  id: string;
  name: string;
  description?: string | null;
  members?: ProjectMember[];
} & AuditInfo;
