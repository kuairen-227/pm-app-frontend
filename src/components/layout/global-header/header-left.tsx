import Link from "next/link";

export function HeaderLeft() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/" className="font-semibold text-lg">
        PM App
      </Link>
    </div>
  );
}
