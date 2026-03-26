"use client";

import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function WorksPage() {
    // Filter out excluded projects and sort newest first
    const visibleProjects = projects
        .filter(p => p.slug !== "oiko-app" && p.slug !== "trionfo-di-sinfonia")
        .sort((a, b) => b.year - a.year);

    return (
        <div className="relative min-h-screen pt-[28px] bg-bg pb-32">
            <div className="relative z-10">
                {/* SECTION HEADER */}
                <div className="w-full flex justify-between items-center px-8 py-4">
                    <div className="text-small text-ink">Works</div>
                    <div className="text-micro text-[#666666]">10 works · 2025</div>
                </div>

                {/* COLUMN HEADERS */}
                <div className="sticky top-[28px] flex w-full bg-bg z-40 p-[10px_32px] mb-[4px] text-micro text-[#666666] sentence-case">
                    <div className="flex-1">Project</div>
                    <div className="w-[160px]">Category</div>
                    <div className="w-[56px] text-right">Year</div>
                </div>

                {/* PROJECT ROWS */}
                <div className="w-full flex flex-col">
                    {visibleProjects.map((project, index) => {
                        const prevProject = index > 0 ? visibleProjects[index - 1] : null;
                        const showYearSeparator = prevProject && prevProject.year !== project.year;

                        return (
                            <div key={project.id} className="w-full flex flex-col">
                                {showYearSeparator && (
                                    <div className="w-full p-[8px_32px] mt-[8px] flex items-center text-micro text-[#333333]">
                                        {project.year}
                                    </div>
                                )}

                                <Link
                                    href={`/work/${project.slug}`}
                                    data-cursor="link"
                                    className="group w-full flex items-center p-[14px_32px] hover:bg-transparent"
                                >
                                    <div className="flex-1 text-small text-[#FFFFFF] font-normal transition-none">
                                        {project.title} {project.unreleased && <span className="text-[#666666] ml-2">[Unreleased]</span>}
                                    </div>
                                    <div className="w-[160px] text-micro text-[#666666]">
                                        {project.category}
                                    </div>
                                    <div className="w-[56px] text-right text-micro text-[#666666]" style={{ fontVariantNumeric: 'tabular-nums' }}>
                                        {project.year}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
