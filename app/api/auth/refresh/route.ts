import { NextResponse } from "next/server";
import { refreshToken } from "@/features/auth/api/auth";

export async function POST() {
  const { response, data } = await refreshToken();

  const res = NextResponse.json(data, {
    status: response.status,
  });

  const setCookie = response.headers.get("set-cookie");

  if (setCookie) {
    res.headers.append("set-cookie", setCookie);
  }

  return res;
}
