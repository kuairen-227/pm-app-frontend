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
      <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <AlertCircle className="h-10 w-10 text-destructive" />

        <div>
          {/* タイトル */}
          <p className="text-lg font-semibold">{title}</p>
          {/* メッセージ */}
          {message && <p className="text-lg font-semibold">{message}</p>}
        </div>

        {/* 再試行アクション */}
        {onRetry && (
          <Button onClick={onRetry} variant="outline">
            リトライ
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2 rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
      <AlertCircle className="mt-0.5 h-4 w-4" />

      <div className="flex-1">
        {/* タイトル */}
        <p className="font-medium">{title}</p>
        {/* メッセージ */}
        {message && <p className="text-xs">{message}</p>}
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
