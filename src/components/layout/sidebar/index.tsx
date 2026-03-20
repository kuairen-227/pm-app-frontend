import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  Sidebar as SidebarPrimitive,
} from "@/components/ui/sidebar";
import { SidebarNav } from "./sidebar-nav";

export function Sidebar() {
  return (
    <SidebarPrimitive>
      {/* ヘッダー */}
      <SidebarHeader>PM App</SidebarHeader>

      {/* コンテンツ */}
      <SidebarContent>
        <SidebarNav />
      </SidebarContent>

      {/* フッター */}
      <SidebarFooter>User</SidebarFooter>
    </SidebarPrimitive>
  );
}
