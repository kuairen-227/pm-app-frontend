import type { z } from "zod";
import type { projectFormSchema } from "../schema/form";

export type ProjectFormData = z.infer<typeof projectFormSchema>;
