import { NextResponse } from "next/server";
import type { LoginRequest, LoginResponse } from "@/features/auth/types/api";
import { env } from "@/shared/config/env";

export async function POST(req: Request) {
  const body: LoginRequest = await req.json();

  // バックエンドAPI呼び出し
  const res = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });

  const data: LoginResponse = await res.json();
  const response = NextResponse.json(data, { status: res.status });

  // バックエンドの Set-Cookie をブラウザに転送
  const rawSetCookie = res.headers.get("set-cookie");
  if (rawSetCookie) {
    rawSetCookie.split(",").forEach((cookieStr) => {
      const [cookiePair, ...attributes] = cookieStr
        .split(";")
        .map((s) => s.trim());
      if (!cookiePair) return;

      const [name, value] = cookiePair.split("=");
      if (!name || !value) return;

      response.cookies.set({
        name,
        value,
        path: "/",
        httpOnly: attributes.some((a) => a.toLowerCase() === "httponly"),
        secure: attributes.some((a) => a.toLowerCase() === "secure"),
        sameSite: "lax",
      });
    });
  }

  return response;
}
