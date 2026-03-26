"server-only";

import { updateProjectDto } from "../../infrastructure/api/updateProjectDto";
import type { UpdateProjectInput } from "../types/input";

export async function updateProject(input: UpdateProjectInput) {
  await updateProjectDto({
    projectId: input.projectId,
    name: input.name,
    description: input.description,
  });
}
