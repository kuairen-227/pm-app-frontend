import { NextResponse } from "next/server";
import type { LaunchProjectRequest } from "@/features/project/types/dto";
import { launchProject } from "@/features/project/usecases/mutations/launchProject";

export async function POST(request: Request) {
  const body = (await request.json()) as LaunchProjectRequest;
  const projectId = await launchProject(body);

  return NextResponse.json({ projectId }, { status: 201 });
}
