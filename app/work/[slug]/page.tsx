import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChapterPage from "@/components/site/chapter-page";
import { getProject, projects } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title}: chapter ${project.num}, Mahfuz Seidu Agbor`;
  return {
    title,
    description: project.logline,
    openGraph: {
      title,
      description: project.logline,
      images: project.shot ? [{ url: project.shot.desktop, width: 1280, height: 800 }] : undefined,
    },
  };
}

export default async function WorkChapter({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ChapterPage project={project} />;
}
