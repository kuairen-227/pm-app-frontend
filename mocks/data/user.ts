import type { User } from "@/features/user/types/user";

const ADMIN_ID = "11111111-1111-1111-1111-111111111111" as const;
const USER_ID = "22222222-2222-2222-2222-222222222222" as const;

type MockUser = User & { password: string };

export const mockUsers = [
  {
    id: ADMIN_ID,
    name: "管理者 太郎",
    email: "admin@example.com",
    password: "test-password",
    role: "Admin",
    createdBy: ADMIN_ID,
    createdAt: "2026-01-01T00:00:00Z",
    updatedBy: ADMIN_ID,
    updatedAt: "2026-01-01T00:00:00Z",
  },
  {
    id: USER_ID,
    name: "一般 次郎",
    email: "user@example.com",
    password: "test-password",
    role: "User",
    createdBy: ADMIN_ID,
    createdAt: "2026-01-02T00:00:00Z",
    updatedBy: ADMIN_ID,
    updatedAt: "2026-01-02T00:00:00Z",
  },
] as const satisfies readonly MockUser[];

export const admin = mockUsers[0];
export const user = mockUsers[1];
