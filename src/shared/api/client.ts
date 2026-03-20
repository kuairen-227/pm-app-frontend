import "server-only";

import { cookies } from "next/headers";
import createClient from "openapi-fetch";
import { env } from "../config/env";
import type { paths } from "../types/open-api";

const retriedRequests = new WeakSet<Request>();

export const apiClient = createClient<paths>({
  baseUrl: env.NEXT_PUBLIC_API_BASE_URL,
  credentials: "include",
});

async function getCookieHeader() {
  const store = await cookies();

  return store
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");
}

async function refreshAccessToken() {
  await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/refresh`, {
    method: "POST",
    headers: {
      Cookie: await getCookieHeader(),
    },
    credentials: "include",
  });
}

apiClient.use({
  async onRequest({ request }) {
    request.headers.set("Cookie", await getCookieHeader());
    return request;
  },

  async onResponse({ response, request }) {
    console.log(response.url, {
      request: {
        body: request.body,
      },
      response: {
        status: response.status,
        message: response.statusText,
        body: response.body,
      },
    });

    if (response.status !== 401) {
      return response;
    }

    const url = new URL(request.url);

    if (url.pathname.includes("/auth/refresh")) {
      return response;
    }

    if (retriedRequests.has(request)) {
      return response;
    }

    retriedRequests.add(request);

    await refreshAccessToken();

    const retryRequest = new Request(request, {
      headers: {
        ...Object.fromEntries(request.headers),
        Cookie: await getCookieHeader(),
      },
    });

    return fetch(retryRequest);
  },
});
