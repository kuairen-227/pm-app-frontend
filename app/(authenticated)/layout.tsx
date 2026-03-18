import { redirect } from "next/navigation";
import { getCurrentUser } from "@/features/auth/api/getCurrentUser";
import { ThemeToggle } from "./_components/theme-toggle";

export default async function AuthGuardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <ThemeToggle />
      {children}
    </>
  );
}
