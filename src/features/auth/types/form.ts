import type { z } from "zod";
import type { loginFormSchema } from "../schema/form";

export type LoginFormData = z.infer<typeof loginFormSchema>;
