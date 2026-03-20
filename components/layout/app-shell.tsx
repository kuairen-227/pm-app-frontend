import { GlobalHeader } from "./global-header";
import { Sidebar } from "./sidebar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex h-screen">
      {/* サイドバー */}
      <Sidebar />

      {/* メインエリア */}
      <div className="flex flex-1 flex-col">
        {/* ヘッダー */}
        <GlobalHeader />
        {/* コンテンツ */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
