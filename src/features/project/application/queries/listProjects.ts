"server-only";

import { listProjectsDto } from "../../infrastructure/api/listProjects";
import { toProjectFromList } from "../../infrastructure/mappers/dtoToDomain";
import { toProjectListView } from "../../presentation/mappers/domainToView";

export async function listProjects() {
  const dto = await listProjectsDto();
  const entity = dto.map(toProjectFromList);
  const view = entity.map(toProjectListView);

  return view;
}
