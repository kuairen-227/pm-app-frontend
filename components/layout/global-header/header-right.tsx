import { ThemeToggle } from "@/app/(authenticated)/_components/theme-toggle";
import { UserMenu } from "./user-menu";

export function HeaderRight() {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <UserMenu />
    </div>
  );
}
