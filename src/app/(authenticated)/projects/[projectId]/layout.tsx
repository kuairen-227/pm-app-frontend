import { notFound } from "next/navigation";
import {
  PageBody,
  PageContainer,
  PageLayout,
} from "@/components/layout/page-layout";
import { getProject } from "@/features/project/application/queries/getProject";
import type { Project } from "@/features/project/domain/project";
import { ProjectHeader } from "@/features/project/presentation/components/project-layout/project-header";
import { ProjectTabs } from "@/features/project/presentation/components/project-tabs";
import { ProjectProvider } from "@/features/project/presentation/context/project-context";

type ProjectLayoutProps = {
  params: Promise<{ projectId: Project["id"] }>;
  children: React.ReactNode;
};

export default async function ProjectLayout({
  params,
  children,
}: ProjectLayoutProps) {
  const { projectId } = await params;
  const project = await getProject(projectId);

  if (!project) notFound();

  return (
    <ProjectProvider project={project}>
      <PageLayout>
        <PageBody>
          <PageContainer>
            <ProjectHeader project={project} />
            <ProjectTabs projectId={project.id} />

            <div className="mt-6">{children}</div>
          </PageContainer>
        </PageBody>
      </PageLayout>
    </ProjectProvider>
  );
}
