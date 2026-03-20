import Link from "next/link";
import { routes } from "@/shared/config/route";

export function HeaderLeft() {
  return (
    <div className="flex items-center gap-4">
      <Link href={routes.home()} className="font-semibold text-lg">
        PM App
      </Link>
    </div>
  );
}
