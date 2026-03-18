import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { listProjects } from "@/features/project/api/listProjects";

export default async function Home() {
  const projects = await listProjects();

  return (
    <>
      <PageHeader
        title="プロジェクト"
        description="参加しているプロジェクトの一覧"
        actions={<Button>プロジェクト作成</Button>}
      />
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}
