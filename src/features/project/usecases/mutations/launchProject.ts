"server-only";

import { launchProjectDto } from "../../infrastructure/api/launchProjectDto";
import type { LaunchProjectRequest } from "../../types/dto";
import type { ProjectDetailView } from "../../types/view";

export async function launchProject(
  dto: LaunchProjectRequest,
): Promise<ProjectDetailView["id"] | undefined> {
  const response = await launchProjectDto(dto);

  const location = response.headers.get("Location");
  const projectId = location?.split("/").pop();

  return projectId;
}
