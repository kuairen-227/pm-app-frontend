import { listProjects } from "@/features/project/api/listProjects";

export default async function Home() {
  const projects = await listProjects();

  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}
