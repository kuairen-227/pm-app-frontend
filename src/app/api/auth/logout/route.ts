import { NextResponse } from "next/server";
import { logout } from "@/features/auth/infrastructure/api/logout";

export async function POST() {
  const { response, data } = await logout();

  const res = NextResponse.json(data, {
    status: response.status,
  });

  const setCookie = response.headers.get("set-cookie");

  if (setCookie) {
    res.headers.append("set-cookie", setCookie);
  }

  return res;
}
