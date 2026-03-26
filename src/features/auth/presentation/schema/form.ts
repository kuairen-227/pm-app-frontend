import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email("有効なメールアドレスを入力してください"),
  password: z.string().min(1, "パスワードは必須です"),
});
