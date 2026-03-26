"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/features/auth/presentation/components/login-form";
import { routes } from "@/shared/config/route";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <CardHeader>
          <CardTitle>ログイン</CardTitle>
        </CardHeader>

        <CardContent>
          <LoginForm onSuccess={() => router.push(routes.home())} />
        </CardContent>
      </Card>
    </div>
  );
}
