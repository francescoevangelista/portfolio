import { projects } from "@/data/portfolio";
import { notFound } from "next/navigation";
import ClientPage from "./ClientPage";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const projectIndex = projects.findIndex(p => p.slug === slug);
    if (projectIndex === -1) notFound();

    return <ClientPage projectIndex={projectIndex} />;
}
