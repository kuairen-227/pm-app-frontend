"server-only";

import { deleteProjectDto } from "../../infrastructure/api/deleteProjectDto";
import type { DeleteProjectInput } from "../types/input";

export async function deleteProject(input: DeleteProjectInput) {
  await deleteProjectDto({ projectId: input.projectId });
}
