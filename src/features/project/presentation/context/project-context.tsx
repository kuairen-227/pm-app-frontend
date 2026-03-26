"use client";

import { createContext, use } from "react";
import type { ProjectDetailView } from "../../application/types/view";

type ProjectProviderProps = {
  project: ProjectDetailView;
  children: React.ReactNode;
};

const ProjectContext = createContext<ProjectDetailView | undefined>(undefined);

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
