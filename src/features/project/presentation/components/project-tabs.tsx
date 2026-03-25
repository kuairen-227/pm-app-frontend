"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { routes } from "@/shared/config/route";
import { cn } from "@/shared/lib/cn";
import type { Project } from "../../domain/project";

type ProjectTabsProps = {
  projectId: Project["id"];
};

export function ProjectTabs({ projectId }: ProjectTabsProps) {
  const segment = useSelectedLayoutSegment();

  const tabs = [
    { label: "ホーム", href: routes.project.detail(projectId), segment: null },
    {
      label: "チケット",
      href: routes.ticket.list(projectId),
      segment: "tickets",
    },
    {
      label: "メンバー",
      href: routes.project.members(projectId),
      segment: "members",
    },
    {
      label: "設定",
      href: routes.project.settings(projectId),
      segment: "settings",
    },
  ];

  return (
    <nav className="flex gap-6 border-b">
      {tabs.map((tab) => {
        const isActive = segment === tab.segment;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "pb-2 text-sm font-medium",
              isActive ? "border-b-2 border-primary" : "text-muted-foreground",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
