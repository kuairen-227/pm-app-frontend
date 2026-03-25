"server-only";

import { listProjectsDto } from "../../infrastructure/api/listProjects";
import { toProjectListView } from "../../mapper/domainToView";
import { toProjectFromList } from "../../mapper/dtoToDomain";

export async function listProjects() {
  const dto = await listProjectsDto();
  const entity = dto.map(toProjectFromList);
  const view = entity.map(toProjectListView);

  return view;
}
