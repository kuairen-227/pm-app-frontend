import {
  PageBody,
  PageContainer,
  PageHeader,
  PageLayout,
} from "@/components/layout/page-layout";
import { ProjectForm } from "@/features/project/presentation/components/project-form";

export default function ProjectNewPage() {
  return (
    <PageLayout>
      <PageBody>
        <PageContainer>
          {/* ヘッダー */}
          <PageHeader
            title="プロジェクト作成"
            description="新しいプロジェクトを作成します"
          />

          {/* プロジェクト作成フォーム */}
          <ProjectForm />
        </PageContainer>
      </PageBody>
    </PageLayout>
  );
}
