import { NextResponse } from "next/server";
import { login } from "@/features/auth/api/auth";

export async function POST(req: Request) {
  const body = await req.json();

  const { response, data } = await login(body);

  const res = NextResponse.json(data, {
    status: response.status,
  });

  const setCookie = response.headers.get("set-cookie");

  if (setCookie) {
    res.headers.append("set-cookie", setCookie);
  }

  return res;
}
