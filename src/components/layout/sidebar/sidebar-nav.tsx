"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/cn";
import { navItem } from "./nav-items";

export function SidebarNav() {
  const path = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {navItem.map((item) => {
        const isActive = path.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-3 py-2 rounded-md text-sm transition-colors",
              isActive
                ? "bg-accent font-medium"
                : "text-muted-foreground hover:bg-accent",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
