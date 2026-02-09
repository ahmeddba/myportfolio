import { notFound } from "next/navigation";
import { projects, getProjectById, getProjectNavigation } from "@/data/projects";
import ProjectPageClient from "./ProjectPageClient";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(Number(id));
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Ahmed Ben Abid`,
    description: project.overview,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  const navigation = getProjectNavigation(Number(id));

  return <ProjectPageClient project={project} navigation={navigation} />;
}
