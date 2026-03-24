import { NextResponse } from "next/server";
import { deleteProject } from "@/features/project/api/deleteProject";
import { updateProject } from "@/features/project/api/updateProject";
import type { UpdateProjectRequest } from "@/features/project/types/api";
import type { Project } from "@/features/project/types/project";

type ParamsProps = {
  projectId: Project["id"];
};

/**
 * プロジェクト編集 API
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<ParamsProps> },
) {
  const { projectId } = await params;
  const body = (await request.json()) as UpdateProjectRequest;
  await updateProject(projectId, body);

  return NextResponse.json({ status: 201 });
}

/**
 * プロジェクト削除 API
 */
export async function DELETE({ params }: { params: Promise<ParamsProps> }) {
  const { projectId } = await params;
  await deleteProject(projectId);

  return NextResponse.json({ status: 201 });
}
