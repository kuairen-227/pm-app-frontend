import { SidebarProvider } from "../ui/sidebar";
import { GlobalHeader } from "./global-header";
import { Sidebar } from "./sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <SidebarProvider>
      {/* サイドバー */}
      <Sidebar />

      {/* メインエリア */}
      <div className="flex flex-1 flex-col">
        {/* ヘッダー */}
        <GlobalHeader />
        {/* コンテンツ */}
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </SidebarProvider>
  );
}
