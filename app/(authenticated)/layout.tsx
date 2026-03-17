import { redirect } from "next/navigation";
import { getCurrentUser } from "@/features/auth/api/getCurrentUser";

export default async function AuthGuardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <>{children}</>;
}
