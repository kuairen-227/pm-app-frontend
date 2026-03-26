import { NextResponse } from "next/server";
import { deleteProject } from "@/features/project/application/mutations/deleteProject";
import { updateProject } from "@/features/project/application/mutations/updateProject";
import type { Project } from "@/features/project/domain/project";
import type { UpdateProjectRequest } from "@/features/project/infrastructure/dto";

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

  return NextResponse.json({ status: 204 });
}

/**
 * プロジェクト削除 API
 */
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<ParamsProps> },
) {
  const { projectId } = await params;
  await deleteProject(projectId);

  return NextResponse.json({ status: 204 });
}
