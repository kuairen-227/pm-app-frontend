import { NextResponse } from "next/server";
import { launchProject } from "@/features/project/application/mutations/launchProject";
import type { LaunchProjectRequest } from "@/features/project/infrastructure/dto";

export async function POST(request: Request) {
  const body = (await request.json()) as LaunchProjectRequest;
  const projectId = await launchProject(body);

  return NextResponse.json({ projectId }, { status: 201 });
}
