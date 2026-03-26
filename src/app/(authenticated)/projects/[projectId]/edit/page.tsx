"use client";

import { ProjectForm } from "@/features/project/presentation/components/project-form";
import { useProject } from "@/features/project/presentation/context/project-context";

export default function ProjectEditPage() {
  const project = useProject();

  return <ProjectForm project={project} />;
}
