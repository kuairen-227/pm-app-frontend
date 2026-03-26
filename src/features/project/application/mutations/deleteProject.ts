"server-only";

import { deleteProjectDto } from "../../infrastructure/api/deleteProjectDto";
import type { ProjectDetailView } from "../types/view";

export async function deleteProject(projectId: ProjectDetailView["id"]) {
  await deleteProjectDto(projectId);
}
