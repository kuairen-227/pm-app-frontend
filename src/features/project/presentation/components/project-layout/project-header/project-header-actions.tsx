"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Project } from "@/features/project/domain/project";
import { routes } from "@/shared/config/route";

type ProjectHeaderActionsProps = {
  projectId: Project["id"];
};

export function ProjectHeaderActions({ projectId }: ProjectHeaderActionsProps) {
  return (
    <div className="flex gap-2">
      <Button variant="outline">
        <Link href={routes.project.edit(projectId)}>編集</Link>
      </Button>

      <Button variant="destructive">削除</Button>
    </div>
  );
}
