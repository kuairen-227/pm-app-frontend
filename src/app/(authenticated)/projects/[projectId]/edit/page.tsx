"use client";

import { ProjectForm } from "@/features/project/components/project-form";
import { useProject } from "@/features/project/context/project-context";

export default function ProjectEditPage() {
  const project = useProject();

  return <ProjectForm project={project} />;
}
