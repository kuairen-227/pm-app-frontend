import type { LaunchProjectRequest } from "./api";
import type { ProjectFormData } from "./form";

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
): LaunchProjectRequest {
  return {
    name: input.name,
    description: input.description ?? null,
  } as LaunchProjectRequest;
}
