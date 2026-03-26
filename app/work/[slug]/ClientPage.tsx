"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function ClientPage({ projectIndex }: { projectIndex: number }) {
    const project = projects[projectIndex];
    if (!project) return null;

    const total = projects.length;

    // Order of next/prev using chronological dataset structure
    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : projects[total - 1];
    const nextProject = projectIndex < total - 1 ? projects[projectIndex + 1] : projects[0];

    return (
        <div className="min-h-screen relative bg-bg flex flex-col pt-[28px]">
            {/* TWO COLUMNS */}
            <div className="flex flex-col md:grid md:grid-cols-[240px_1fr] flex-1">
                {/* LEFT / META */}
                <div className="w-full md:w-[240px] p-[32px_24px_32px_32px] md:sticky md:top-[28px] md:h-[calc(100vh-28px)] flex flex-col">
                    <div className="text-small text-[#FFFFFF]">{project.title}</div>

                    <div className="flex flex-col w-full mt-[20px] mb-[20px]">
                        <MetaRow label="Year" value={project.year.toString()} />
                        <MetaRow label="Client" value={project.client} />
                        <MetaRow label="Role" value={project.role} />
                        <MetaRow label="Type" value={project.type} />

                        {project.exhibited?.map((ex, i) => (
                            <MetaRow key={i} label="Exhibited" value={`${ex.venue}${ex.city ? `, ${ex.city}` : ''} — ${ex.year}`} highlightLabel />
                        ))}

                        {project.selected?.map((sel, i) => (
                            <MetaRow key={i} label="Selected" value={`${sel.name} — ${sel.year}`} highlightLabel />
                        ))}

                        {project.awarded?.map((aw, i) => (
                            <MetaRow key={i} label="Award" value={`${aw.result}, ${aw.name} — ${aw.year}${aw.collaborators ? ` w/ ${aw.collaborators}` : ''}`} highlightLabel />
                        ))}
                    </div>

                    <div className="text-micro text-[#666666] leading-[1.9] mt-[24px]">
                        {project.description}
                    </div>

                    <div className="mt-8 md:mt-auto flex justify-between w-full">
                        <Link href={`/work/${prevProject.slug}`} data-cursor="link" className="text-micro text-[#666666] hover:text-[#FFFFFF] transition-none">
                            Prev
                        </Link>
                        <Link href={`/work/${nextProject.slug}`} data-cursor="link" className="text-micro text-[#666666] hover:text-[#FFFFFF] transition-none">
                            Next
                        </Link>
                    </div>
                </div>

                {/* RIGHT / IMAGES */}
                <div className="flex-1 flex flex-col gap-[2px] bg-bg">
                    {project.videos?.map((videoSrc, i) => (
                        <video
                            key={`video-${i}`}
                            src={videoSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto block"
                        />
                    ))}
                    {project.gallery_images?.map((img, i) => (
                        <motion.img
                            key={i}
                            src={img}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-auto block"
                            alt={`${project.title} image ${i + 1}`}
                            data-cursor="image"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function MetaRow({ label, value, highlightLabel = false }: { label: string; value: string; highlightLabel?: boolean }) {
    return (
        <div className="flex w-full mb-[12px] last:mb-0">
            <div className={`w-[80px] text-micro uppercase tracking-[0.1em] shrink-0 ${highlightLabel ? 'text-[#FFFFFF]' : 'text-[#444444]'}`}>
                {label}
            </div>
            <div className="flex-1 text-micro text-[#FFFFFF]">
                {value}
            </div>
        </div>
    );
}
