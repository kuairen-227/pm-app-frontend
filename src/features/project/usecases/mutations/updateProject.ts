"server-only";

import { updateProjectDto } from "../../infrastructure/api/updateProjectDto";
import type { UpdateProjectRequest } from "../../types/dto";
import type { ProjectDetailView } from "../../types/view";

export async function updateProject(
  projectId: ProjectDetailView["id"],
  data: UpdateProjectRequest,
) {
  await updateProjectDto(projectId, data);
}
