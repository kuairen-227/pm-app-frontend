import type { ProjectListView } from "@/features/project/types/view";
import { ProjectCard } from "./project-card";

type ProjectGridProps = {
  projects: ProjectListView[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
