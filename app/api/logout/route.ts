import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { env } from "@/shared/config/env";

export async function POST() {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch(
    `${env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/logout`,
    {
      method: "POST",
      headers: {
        Cookie: cookieHeader,
      },
      credentials: "include",
    },
  );

  const response = NextResponse.json({ success: true }, { status: res.status });

  // BackendのSet-Cookieをブラウザへ転送
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) {
    response.headers.set("set-cookie", setCookie);
  }

  return response;
}
