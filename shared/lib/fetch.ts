import type z from "zod";
import { env } from "../config/env";
import type { HttpMethod } from "../types/api";

/**
 * 基本 API 呼び出しオプション
 */
type CallApiBase<B> = {
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: B;
  params?: Record<string, string | number | boolean>;
};

/**
 * ジェネリック単一型
 * T = レスポンス型（レスポンスなしは void）
 * B = body 型
 */
export type CallApiOptions<T = void, B = undefined> = CallApiBase<B> & {
  schema?: z.ZodSchema<T>;
};

/**
 * API呼び出し関数
 */
export async function callApi<T = void, B = undefined>(
  endpoint: string,
  options: CallApiOptions<T, B>,
): Promise<T> {
  const { method, headers, body, params, schema } = options;
  const url = buildUrlWithParams(endpoint, params);

  const res = await fetch(url, {
    method,
    headers: {
      ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API Error: ${res.status} ${res.statusText} - ${text}`);
  }

  if (schema) {
    const data = await res.json();
    return schema.parse(data);
  }

  // レスポンスなしは void を返す
  return undefined as unknown as T;
}

/**
 * URL を構築するユーティリティ
 */
function buildUrlWithParams(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
) {
  const url = `${env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`;
  if (!params) return url;

  const queryParams = new URLSearchParams(
    Object.entries(params).map(([k, v]) => [k, String(v)]),
  );
  return `${url}?${queryParams}`;
}
