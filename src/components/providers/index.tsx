import { SidebarProvider } from "../ui/sidebar";
import { MswProvider } from "./msw-provider";
import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <MswProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </MswProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
