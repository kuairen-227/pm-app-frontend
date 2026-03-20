// biome-ignore-all lint/style/noProcessEnv: このファイル以外で process.env の利用を禁止

import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_APP_ENV: z.enum(["local", "staging", "production"]),
    NEXT_PUBLIC_API_BASE_URL: z.url({
      protocol:
        process.env.NEXT_PUBLIC_APP_ENV === "production" ? /^https/ : /^http/,
    }),
    NEXT_PUBLIC_MOCK_ENABLED: z.boolean(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_MOCK_ENABLED: process.env.NEXT_PUBLIC_MOCK_ENABLED === "true",
  },
});
