"use client";

import { createContext, use } from "react";
import type { Project } from "../types/project";

type ProjectProviderProps = {
  project: Project;
  children: React.ReactNode;
};

const ProjectContext = createContext<Project | undefined>(undefined);

export function ProjectProvider({ project, children }: ProjectProviderProps) {
  return (
    <ProjectContext.Provider value={project}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const project = use(ProjectContext);
  if (!project) {
    throw new Error("useProject must be used within ProjectProvider");
  }
  return project;
}
