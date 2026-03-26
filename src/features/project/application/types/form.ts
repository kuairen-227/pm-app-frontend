import type { z } from "zod";
import type { projectFormSchema } from "../../presentation/schema/form";

export type ProjectFormData = z.infer<typeof projectFormSchema>;
