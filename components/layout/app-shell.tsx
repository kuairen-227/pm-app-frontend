import { ThemeToggle } from "@/app/(authenticated)/_components/theme-toggle";
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
        <header className="h-14 border-b px-6 flex items-center">
          Header
          <ThemeToggle />
        </header>
        {/* コンテンツ */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
