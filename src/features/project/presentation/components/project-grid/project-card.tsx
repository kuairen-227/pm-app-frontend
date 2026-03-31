import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectListView } from "@/features/project/presentation/types/view";

type ProjectCardProps = {
  project: ProjectListView;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block">
      <Card className="h-full transition hover:bg-muted/50 hover:shadow-sm">
        <CardHeader>
          <CardTitle className="text-base leading-none">
            {project.name}
          </CardTitle>

          {project.description && (
            <CardDescription className="line-clamp-2">
              {project.description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}
