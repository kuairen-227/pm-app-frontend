"server-only";

import { launchProjectDto } from "../../infrastructure/api/launchProjectDto";
import type { LaunchProjectInput } from "../types/input";
import type { ProjectDetailView } from "../types/view";

export async function launchProject(
  input: LaunchProjectInput,
): Promise<ProjectDetailView["id"] | undefined> {
  const output = await launchProjectDto({
    name: input.name,
    description: input.description,
  });

  return output;
}
