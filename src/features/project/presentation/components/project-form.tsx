"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@/components/state/error-message";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { routes } from "@/shared/config/route";
import type { ProjectFormData } from "../../application/types/form";
import { useLaunchProject } from "../hooks/useLaunchProject";
import { useUpdateProject } from "../hooks/useUpdateProject";
import { projectFormSchema } from "../schema/form";
import type { ProjectDetailView } from "../types/view";

type ProjectFormProps = {
  project?: ProjectDetailView;
};

export function ProjectForm({ project }: ProjectFormProps) {
  const router = useRouter();
  const launchProjectMutation = useLaunchProject();
  const updateProjectMutation = useUpdateProject();
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: project?.name ?? "",
      description: project?.description ?? "",
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    setError(null);

    try {
      if (project) {
        await updateProjectMutation.mutateAsync({
          projectId: project.id,
          data: data,
        });
        router.refresh(); // ProjectProvider の Context 更新
        router.push(routes.project.detail(project.id));
      } else {
        const response = await launchProjectMutation.mutateAsync(data);
        router.push(routes.project.detail(response));
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("保存に失敗しました");
      }
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>プロジェクト名</FieldLabel>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>説明</FieldLabel>
              <Input {...field} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      {error && <ErrorMessage message={error} variant="inline" />}
      <Button
        type="submit"
        className="w-full"
        disabled={launchProjectMutation.isPending}
      >
        {launchProjectMutation.isPending ? "保存中..." : "保存"}
      </Button>
    </form>
  );
}
