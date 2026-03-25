"server-only";

import { getProjectDto } from "../../infrastructure/api/getProjectDto";
import { toProjectDetailView } from "../../mapper/domainToView";
import { toProjectFromDetail } from "../../mapper/dtoToDomain";
import type { ProjectDetailView } from "../../types/view";

export async function getProject(projectId: ProjectDetailView["id"]) {
  const dto = await getProjectDto(projectId);
  const entity = toProjectFromDetail(dto);
  const view = toProjectDetailView(entity);

  return view;
}
