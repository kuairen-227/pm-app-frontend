import type { ProjectFormData } from "../../application/types/form";
import type {
  LaunchProjectRequest,
  UpdateProjectRequest,
} from "../../infrastructure/dto";

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
