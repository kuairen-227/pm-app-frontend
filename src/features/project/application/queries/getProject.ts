"server-only";

import { getProjectDto } from "../../infrastructure/api/getProjectDto";
import { toProjectFromDetail } from "../../infrastructure/mappers/dtoToDomain";
import { toProjectDetailView } from "../../presentation/mappers/domainToView";
import type { ProjectDetailView } from "../types/view";

export async function getProject(projectId: ProjectDetailView["id"]) {
  const dto = await getProjectDto(projectId);
  const entity = toProjectFromDetail(dto);
  const view = toProjectDetailView(entity);

  return view;
}
