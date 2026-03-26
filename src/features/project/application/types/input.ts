import type { Project } from "../../domain/project";

type ProjectIdInput = { projectId: Project["id"] };
export type ProjectContentInput = {
  name: Project["name"];
  description?: Project["description"];
};

export type ListProjectsInput = never;
export type GetProjectInput = ProjectIdInput;
export type LaunchProjectInput = ProjectContentInput;
export type UpdateProjectInput = ProjectIdInput & ProjectContentInput;
export type DeleteProjectInput = ProjectIdInput;
