import { AlertCircle } from "lucide-react";
import { Button } from "../ui/button";

type ErrorMessageProps = {
  title?: string;
  message?: string;
  variant?: "inline" | "page";
  onRetry?: () => void;
};

export function ErrorMessage({
  title = "エラーが発生しました",
  message,
  variant = "inline",
  onRetry,
}: ErrorMessageProps) {
  if (variant === "page") {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-xl border bg-card p-6 text-center shadow-sm">
          <AlertCircle className="h-10 w-10 text-destructive" />

          <div className="space-y-1">
            {/* タイトル */}
            <p className="text-base font-semibold">{title}</p>
            {/* メッセージ */}
            {message && (
              <p className="text-sm text-muted-foreground">{message}</p>
            )}
          </div>

          {/* 再試行アクション */}
          {onRetry && (
            <Button onClick={onRetry} variant="outline">
              リトライ
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/5 p-3">
      <AlertCircle className="mt-0.5 h-4 w-4 text-destructive" />

      <div className="flex-1 space-y-0.5">
        {/* タイトル */}
        <p className="text-sm font-medium text-destructive">{title}</p>
        {/* メッセージ */}
        {message && <p className="text-xs text-muted-foreground">{message}</p>}
      </div>

      {/* 再試行アクション */}
      {onRetry && (
        <Button size="sm" variant="ghost" onClick={onRetry}>
          リトライ
        </Button>
      )}
    </div>
  );
}
