import { cn } from "@/shared/lib/cn";
import { Spinner } from "../ui/spinner";

type LoadingProps = {
  message?: string;
  className?: string;
};

export function Loading({
  message = "読み込み中...",
  className,
}: LoadingProps) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: roleの方がWAI-ARIAとして適切なため
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 py-10 text-muted-foreground",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <Spinner className="h-6 w-6" />
      <span className="text-sm">{message}</span>
    </div>
  );
}
