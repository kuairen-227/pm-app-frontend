"server-only";

import { getProjectDto } from "../../infrastructure/api/getProjectDto";
import { toProjectFromDetail } from "../../infrastructure/mappers/dtoToDomain";
import { toProjectDetailView } from "../../presentation/mappers/domainToView";
import type { GetProjectInput } from "../types/input";

export async function getProject(input: GetProjectInput) {
  const dto = await getProjectDto({ projectId: input.projectId });

  const entity = toProjectFromDetail(dto);
  const view = toProjectDetailView(entity);

  return view;
}
