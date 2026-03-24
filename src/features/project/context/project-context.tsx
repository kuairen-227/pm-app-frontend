"use client";

import { createContext, useContext } from "react";
import type { Project } from "../types/project";

type ProjectProviderProps = {
  project: Project;
  children: React.ReactNode;
};

const ProjectContext = createContext<Project | null>(null);

export function ProjectProvider({ project, children }: ProjectProviderProps) {
  return (
    <ProjectContext.Provider value={project}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within ProjectProvider");
  }
  return context;
}
