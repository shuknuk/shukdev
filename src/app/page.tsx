import { getProjects } from "./admin/actions";
import HomeClient from "@/components/home/HomeClient";
import { Project } from "@/types";
// getProjects now uses the server client internally

export default async function Home() {
  const projects = await getProjects();

  const visibleProjects = projects.filter((p: Project) => !p.is_hidden);

  return <HomeClient initialProjects={visibleProjects} />;
}
