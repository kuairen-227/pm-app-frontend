import { NextResponse } from "next/server";
import { launchProject } from "@/features/project/api/launchProject";
import type { LaunchProjectRequest } from "@/features/project/types/api";

export async function POST(request: Request) {
  const body = (await request.json()) as LaunchProjectRequest;
  const response = await launchProject(body);

  const location = response.headers.get("Location");
  const projectId = location?.split("/").pop();

  return NextResponse.json({ projectId }, { status: 201 });
}
