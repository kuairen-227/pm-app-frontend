import {
  PageBody,
  PageContainer,
  PageLayout,
} from "@/components/layout/page-layout";
import { PageHeader } from "@/components/layout/page-layout/page-header";
import { Button } from "@/components/ui/button";
import { listProjects } from "@/features/project/api/listProjects";
import { ProjectGrid } from "@/features/project/components/project-grid";

export default async function Home() {
  const projects = await listProjects();

  return (
    <PageLayout>
      <PageHeader
        title="プロジェクト"
        description="参加しているプロジェクト"
        actions={<Button>新規作成</Button>}
      />
      <PageBody>
        <PageContainer>
          <ProjectGrid projects={projects} />
        </PageContainer>
      </PageBody>
    </PageLayout>
  );
}
