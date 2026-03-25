import type { LaunchProjectRequest, UpdateProjectRequest } from "../types/dto";
import type { ProjectFormData } from "../types/form";

export function toLaunchProjectRequest(
  input: ProjectFormData,
): LaunchProjectRequest {
  return {
    name: input.name,
    description: input.description ?? null,
  } as LaunchProjectRequest;
}

export function toUpdateProjectRequest(
  input: ProjectFormData,
): UpdateProjectRequest {
  return {
    name: input.name,
    description: input.description ?? null,
  } as UpdateProjectRequest;
}
