import { Loader2Icon } from "lucide-react";
import { cn } from "@/shared/lib/cn";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: roleの方がWAI-ARIAとして適切なため
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
