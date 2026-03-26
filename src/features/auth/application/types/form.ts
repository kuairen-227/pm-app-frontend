import type { z } from "zod";
import type { loginFormSchema } from "../../presentation/schema/form";

export type LoginFormData = z.infer<typeof loginFormSchema>;
