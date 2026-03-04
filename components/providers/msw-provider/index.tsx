import { env } from "@/shared/config/env";
import { MswBrowserProvider } from "./msw-browser-provider";

if (env.NEXT_PUBLIC_MOCK_ENABLED) {
  const { server } = await import("@/mocks/server");
  server.listen();
}

export function MswProvider({ children }: { children: React.ReactNode }) {
  return <MswBrowserProvider>{children}</MswBrowserProvider>;
}
