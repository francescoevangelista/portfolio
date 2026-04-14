"use client";

import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-[28px] bg-bg flex flex-col md:flex-row w-full relative">
            {/* LEFT COLUMN */}
            <div className="w-full md:w-[280px] md:sticky md:top-[28px] md:h-[calc(100vh-28px)] flex flex-col p-8 md:p-[32px_24px_32px_32px] shrink-0">
                <div>
                    <div className="text-small text-[#FFFFFF] mb-[6px]">Francesco Evangelista</div>
                    <div className="text-micro text-[#666666] sentence-case mb-[6px]">Art director, visual designer</div>
                    <div className="text-micro text-[#666666]">Roma, Italy</div>
                </div>

                <div className="mt-[32px] flex flex-col">
                    <span className="text-micro text-[#666666] block w-max mb-[5px]">
                        evangelistfrancesco@gmail.com
                    </span>
                    <Link href="https://instagram.com/franzevangelistaa" target="_blank" data-cursor="link" className="text-micro text-[#FFFFFF] hover:text-[#666666] transition-none block w-max mb-[5px]">
                        Instagram ↗
                    </Link>
                    <Link href="https://linkedin.com/in/francesco-evangelista-4137a6237" target="_blank" data-cursor="link" className="text-micro text-[#FFFFFF] hover:text-[#666666] transition-none block w-max mb-[5px]">
                        LinkedIn ↗
                    </Link>
                    <Link href="https://youtube.com/@francescooevangelista" target="_blank" data-cursor="link" className="text-micro text-[#666666] hover:text-[#FFFFFF] transition-none block w-max mb-[5px]">
                        YouTube ↗
                    </Link>
                    <Link href="https://soundcloud.com/francescoevangelista" target="_blank" data-cursor="link" className="text-micro text-[#666666] hover:text-[#FFFFFF] transition-none block w-max">
                        SoundCloud ↗
                    </Link>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex-1 p-8 md:p-[32px] overflow-y-auto pb-32 bg-bg">
                <CvSection title="Education" isFirst>
                    <CvEntry date="2022 → 2026" title="Graphic design & art direction" context="NABA — Nuova Accademia di Belle Arti, Roma" />
                </CvSection>

                <CvSection title="Experience">
                    <CvEntry date="11.2025 → Ongoing" title="Creative & graphic designer" context="Senape Digital Agency, Roma" />
                    <CvEntry date="11.2025 → Ongoing" title="Graphic communication, events" context="NABA, Roma" />
                    <CvEntry date="09.2025 → Ongoing" title="Logo design, brand communication" context="OK. Concept Store — Box 98, Mercato di Testaccio, Roma" />
                    <CvEntry date="08.2025" title="Production assistant" context="Opera Festival — electronic music festival, Milo, Sicilia" />
                    <CvEntry date="04.2026" title="Type design workshop — Napoli Type" context="Due Studio, Desina — Napoli" />
                    <CvEntry date="2022 → 2026" title="Student life tutor, NABA ambassador, content creator" context="NABA, Roma" />
                </CvSection>

                <CvSection title="Awards & recognition">
                    <CvEntry date="02.2026" title='Exhibition — "6 modi per perdersi"' context="Officine Fotografiche, Roma — Saudade" />
                    <CvEntry date="02.2026" title='Exhibition — "Lovely sunday" by Ritmo' context="Roma — La città opaca" />
                    <CvEntry date="01.2026" title="Bronze — NCA Awards 2025" context="Oiko app — w/ L. Montaldista, G. Saccone, I. Oppizio" />
                    <CvEntry date="10.2025" title="Exhibition, semifinal MarteLive" context="Lanificio, Roma — Saudade" />
                    <CvEntry date="2025" title="Selected — YoOurbana contest" context='"Lunedì Stratificazioni"' />
                </CvSection>

                <CvSection title="Organizations">
                    <CvEntry date="2026" title="AIAP" context="Associazione italiana design della comunicazione visiva" />
                </CvSection>
            </div>
        </div>
    );
}

function CvSection({ title, children, className = "", isFirst = false }: { title: string; children: React.ReactNode; className?: string; isFirst?: boolean }) {
    return (
        <div className={`flex flex-col ${isFirst ? '' : 'mt-[40px]'} ${className}`}>
            <div className="text-micro text-[#444444] uppercase tracking-[0.12em] mb-[16px]">
                {title}
            </div>
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    );
}

function CvEntry({ date, title, context }: { date: string; title: string; context: string }) {
    return (
        <div className="flex w-full mb-[20px] last:mb-0">
            <div className="w-[140px] text-micro text-[#666666] shrink-0" style={{ fontVariantNumeric: "tabular-nums" }}>
                {date}
            </div>
            <div className="flex-1 flex flex-col">
                <div className="text-small text-[#FFFFFF]">{title}</div>
                {context && <div className="text-micro text-[#666666] mt-[2px]">{context}</div>}
            </div>
        </div>
    );
}