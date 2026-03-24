import { notFound } from "next/navigation";
import {
  PageBody,
  PageContainer,
  PageLayout,
} from "@/components/layout/page-layout";
import { getProject } from "@/features/project/api/getProject";
import { ProjectHeader } from "@/features/project/components/project-layout/project-header";
import { ProjectTabs } from "@/features/project/components/project-tabs";
import { ProjectProvider } from "@/features/project/context/project-context";
import type { Project } from "@/features/project/types/project";

type ProjectLayoutProps = {
  params: { projectId: Project["id"] };
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
