import { NextResponse } from "next/server";
import { env } from "@/shared/config/env";

export async function POST() {
  // Route Handler が Cookie を自動送信
  const res = await fetch(
    `${env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/refresh`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    },
  );

  const data = await res.json();
  const response = NextResponse.json(data, { status: res.status });

  // 新しい access_token を Cookie にセット
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
