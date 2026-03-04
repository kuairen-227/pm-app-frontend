import { MswProvider } from "./msw-provider";
import QueryProvider from "./query-provider";
import { ThemeProvider } from "./theme-provider";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <MswProvider>{children}</MswProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
