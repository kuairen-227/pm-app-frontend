import {
  PageBody,
  PageContainer,
  PageLayout,
} from "@/components/layout/page-layout";
import { PageHeader } from "@/components/layout/page-layout/page-header";
import { Button } from "@/components/ui/button";
import { listProjects } from "@/features/project/api/listProjects";

export default async function Home() {
  const projects = await listProjects();

  return (
    <PageLayout>
      <PageHeader
        title="プロジェクト"
        description="参加しているプロジェクトの一覧"
        actions={<Button>プロジェクト作成</Button>}
      />
      <PageBody>
        <PageContainer>
          <ul>
            {projects.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        </PageContainer>
      </PageBody>
    </PageLayout>
  );
}
