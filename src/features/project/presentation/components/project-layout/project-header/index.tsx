import type { ProjectDetailView } from "@/features/project/presentation/types/view";
import { ProjectHeaderActions } from "./project-header-actions";

type ProjectHeaderProps = {
  project: ProjectDetailView;
};

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <h1 className="text-xl font-semibold">{project.name}</h1>
      <ProjectHeaderActions projectId={project.id} />
    </div>
  );
}
