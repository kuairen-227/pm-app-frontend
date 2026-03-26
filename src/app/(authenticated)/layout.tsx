import { redirect } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { getCurrentUser } from "@/features/auth/infrastructure/api/getCurrentUser";
import { routes } from "@/shared/config/route";

export default async function AuthGuardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (!user) {
    redirect(routes.auth.login());
  }

  return <AppShell>{children}</AppShell>;
}
