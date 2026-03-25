"use client";

import { useProject } from "@/features/project/context/project-context";
import { ProjectForm } from "@/features/project/presentation/components/project-form";

export default function ProjectEditPage() {
  const project = useProject();

  return <ProjectForm project={project} />;
}
