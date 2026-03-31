"server-only";

import { launchProjectDto } from "../../infrastructure/api/launchProjectDto";
import type { ProjectDetailView } from "../../presentation/types/view";
import type { LaunchProjectInput } from "../types/input";

export async function launchProject(
  input: LaunchProjectInput,
): Promise<ProjectDetailView["id"] | undefined> {
  const output = await launchProjectDto({
    name: input.name,
    description: input.description,
  });

  return output;
}
