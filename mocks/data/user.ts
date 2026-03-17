export const mockUsers = [
  {
    id: "11111111-1111-1111-1111-111111111111",
    name: "管理者 太郎",
    email: "admin@example.com",
    password: "test-password",
    role: "Admin",
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    name: "一般 次郎",
    email: "user@example.com",
    password: "test-password",
    role: "User",
  },
] as const;

export const admin = mockUsers[0];
export const user = mockUsers[1];
