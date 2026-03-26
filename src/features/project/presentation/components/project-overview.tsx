"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProject } from "../context/project-context";

export function ProjectOverview() {
  const project = useProject();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* プロジェクト情報 */}
      <Card>
        <CardHeader>
          <CardTitle>プロジェクト情報</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{project.description}</p>
          <p>開始日: {project.createdAt}</p>
        </CardContent>
      </Card>

      {/* プロジェクト状況 */}
      <Card>
        <CardHeader>
          <CardTitle>統計情報</CardTitle>
        </CardHeader>
        <CardContent>チケット数とか</CardContent>
      </Card>
    </div>
  );
}
