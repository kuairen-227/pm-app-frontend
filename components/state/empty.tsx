import { FolderOpen } from "lucide-react";
import {
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  Empty as EmptyPrimitive,
  EmptyTitle,
} from "../ui/empty";

type EmptyProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

export function Empty({
  icon,
  title = "データがありません",
  description,
  action,
}: EmptyProps) {
  return (
    <EmptyPrimitive className="py-10">
      <EmptyHeader className="flex flex-col items-center gap-3 text-center">
        {/* アイコン */}
        <div className="text-muted-foreground">
          {icon ?? <FolderOpen className="h-10 w-10" />}
        </div>

        <div className="space-y-1">
          {/* タイトル */}
          <EmptyTitle>{title}</EmptyTitle>
          {/* 説明 */}
          {description && <EmptyDescription>{description}</EmptyDescription>}
        </div>
      </EmptyHeader>

      {/* CTA */}
      {action && (
        <EmptyContent className="mt-4 flex justify-center">
          {action}
        </EmptyContent>
      )}
    </EmptyPrimitive>
  );
}
