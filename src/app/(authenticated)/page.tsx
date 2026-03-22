import Link from "next/link";
import {
  PageBody,
  PageContainer,
  PageLayout,
} from "@/components/layout/page-layout";
import { PageHeader } from "@/components/layout/page-layout/page-header";
import { Empty } from "@/components/state/empty";
import { Button } from "@/components/ui/button";
import { listProjects } from "@/features/project/api/listProjects";
import { ProjectGrid } from "@/features/project/components/project-grid";
import { routes } from "@/shared/config/route";

export default async function Home() {
  const projects = await listProjects();

  return (
    <PageLayout>
      <PageBody>
        <PageContainer>
          {/* ヘッダー */}
          <PageHeader
            title="プロジェクト"
            description="参加しているプロジェクト"
            actions={
              <Button>
                <Link href={routes.project.new()}>新規作成</Link>
              </Button>
            }
          />

          {/* プロジェクト一覧 */}
          {projects.length === 0 ? (
            <Empty
              title="プロジェクトがありません"
              description="新しいプロジェクトを作成してください"
              action={<Button>新規作成</Button>}
            />
          ) : (
            <ProjectGrid projects={projects} />
          )}
        </PageContainer>
      </PageBody>
    </PageLayout>
  );
}
