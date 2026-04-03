export type Project = {
  id: number
  slug: string
  title: string
  year: number
  client: string
  role: string
  category: string
  type: string
  description: string
  gallery_images?: string[]
  videos?: string[]
  exhibited?: { venue: string; city: string; year: number; show?: string }[]
  selected?: { name: string; year: number }[]
  awarded?: { name: string; year: number; result: string; collaborators?: string }[]
  unreleased?: boolean
}

export const projects: Project[] = [
  {
    id: 1, slug: "saudade",
    title: "Saudade",
    year: 2025, client: "NABA",
    role: "Photography, book design",
    category: "Photography", type: "Photography",
    description: "Photographic project on longing, memory and displacement through fragmented urban landscapes.",
    gallery_images: [
      "/works/saudade/01.jpg",
      "/works/saudade/02.jpg",
      "/works/saudade/cover.jpg",
      "/works/saudade/04.jpg",
      "/works/saudade/05.jpg",
      "/works/saudade/06.jpg",
      "/works/saudade/07.jpg",
      "/works/saudade/08.jpg",
      "/works/saudade/09.jpg",
      "/works/saudade/10.jpg",
      "/works/saudade/11.jpg",
      "/works/saudade/12.jpg",
      "/works/saudade/13.jpg",
      "/works/saudade/14.jpg",
      "/works/saudade/15.jpg"
    ],
    videos: ["/works/saudade/video.mp4"],
    exhibited: [
      { venue: "Officine Fotografiche", city: "Roma", year: 2026, show: "6 modi per perdersi" },
      { venue: "Lanificio", city: "Roma", year: 2025, show: "MARTE Live Semifinal" }
    ]
  },

  {
    id: 2, slug: "la-citta-opaca",
    title: "La città opaca",
    year: 2025, client: "Personal",
    role: "Photography",
    category: "Photography", type: "Photography",
    description: "Urban photography on Rome's visual density and spatial contradiction. The city as an unreadable text.",
    gallery_images: [
      "/works/la-citta-opaca/01.jpg",
      "/works/la-citta-opaca/02.jpg",
      "/works/la-citta-opaca/03.jpg",
    ],
    exhibited: [{ venue: "Ritmo Lovely Sunday", city: "Roma", year: 2026 }]
  },
  {
    id: 3, slug: "7-transitions",
    title: "7 Transitions",
    year: 2025, client: "YoUrbana",
    role: "Video direction, editing",
    category: "Video", type: "Urban video",
    description: "7 Transitions is a visual exploration of the city of Rome through seven different temporal and spatial transitions.",
    videos: [
      "/works/7-transitions/1.mp4",
      "/works/7-transitions/2.mp4",
      "/works/7-transitions/3.mp4",
      "/works/7-transitions/4.mp4",
      "/works/7-transitions/5.mp4",
      "/works/7-transitions/6.mp4",
      "/works/7-transitions/7.mp4",
    ],
    selected: [{ name: "YoUrbana contest", year: 2025 }]
  },
  {
    id: 4, slug: "ok-concept-store",
    title: "OK. Concept Store",
    year: 2025, client: "OK. Concept Store",
    role: "Logo design, brand communication, social media",
    category: "Identity", type: "Visual identity",
    description: "Logo design, visual communication and social media for OK., an artisanal concept store at Box 98, Mercato di Testaccio, Roma.",
    gallery_images: [
      "/works/ok-concept-store/3.JPG",
      "/works/ok-concept-store/4.JPG",
      "/works/ok-concept-store/5.JPG",
      "/works/ok-concept-store/6.JPG",
      "/works/ok-concept-store/7.JPG",
      "/works/ok-concept-store/8.JPG",
      "/works/ok-concept-store/9.JPG",
      "/works/ok-concept-store/10.JPG",
    ],
    videos: ["/works/ok-concept-store/0.mp4",
      "/works/ok-concept-store/1.mp4",
    ],
  },
  {
    id: 5, slug: "naba-party",
    title: "NABA party visual",
    year: 2025, client: "NABA Roma",
    role: "Art direction, event production",
    category: "Video", type: "Event identity",
    description: "Full event production from zero — venue, communication, visual identity, speaker management. Total authorship.",
    videos: [
      "/works/naba-party/1.mp4",
    ],
  },
  {
    id: 6, slug: "smogan",
    title: "Smogan",
    year: 2025, client: "Personal",
    role: "Book design, editorial, concept",
    category: "Editorial", type: "Artist's book",
    description: "Artist's book on the maladaptive superstimulus of smoking. The cigarette as cultural object and addiction design.",
    videos: [
      "/works/smogan/1.mp4",
    ],
  },
  {
    id: 7, slug: "doubledragon",
    title: "DoubleDragon visual concept",
    year: 2025, client: "DoubleDragon",
    role: "Art direction, visual design",
    category: "Identity", type: "Social identity",
    description: "Visual concept for DoubleDragon, CEO Diego Manfreda. Feed logic, color system, recurring motifs. Unreleased.",
    gallery_images: [
      "/works/doubledragon/1.png",
      "/works/doubledragon/2.png",
      "/works/doubledragon/3.png",
    ],
    videos: ["/works/doubledragon/4.mov",
      "/works/doubledragon/5.mov",
    ],
    unreleased: true
  },
  {
    id: 8, slug: "mangia-digiuna",
    title: "Mangia / Digiuna",
    year: 2025, client: "Desina Festival — proposal",
    role: "Art direction, editorial",
    category: "Video", type: "Festival identity — proposal",
    description: "Festival identity proposal. On creative madness — consuming everything and nothing. Not selected.",
    videos: ["/works/mangia-digiuna/01.mp4"],
  },
  {
    id: 9, slug: "scan-completed",
    title: "Scan completed",
    year: 2025, client: "Personal",
    role: "Animation, motion design",
    category: "Experimental video", type: "Experimental animation",
    description: "Digital scanning artifacts, glitch, machine vision. The body as data — processed, incomplete.",
    videos: ["/works/scan-completed/1.mp4"],
  },
  {
    id: 10, slug: "chi-sono-io",
    title: "Chi sono io?",
    year: 2025, client: "Personal",
    role: "Animation, concept",
    category: "Experimental video", type: "Experimental animation",
    description: "Identity fragmented through found footage, text, repetition and abstract motion.",
    videos: ["/works/chi-sono-io/1.mp4"],
  },
  {
    id: 11, slug: "oiko-app",
    title: "Oiko app",
    year: 2025, client: "NCA Awards",
    role: "Art direction, visual design",
    category: "Digital", type: "App design",
    description: "App concept and visual identity. Collaborative project with Luca Montaldista, Giulia Saccone, Ilaria Oppizio.",
    gallery_images: ["https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1400&q=85&auto=format&fit=crop&grayscale"],
    awarded: [{ name: "NCA Awards 2025", year: 2025, result: "Bronze", collaborators: "L. Montaldista, G. Saccone, I. Oppizio" }]
  },
  {
    id: 12, slug: "trionfo-di-sinfonia",
    title: "Trionfo di Sinfonia",
    year: 2025, client: "Trionfo di Sinfonia",
    role: "Video direction, editing",
    category: "Video", type: "Documentary vlog",
    description: "Backstage vlog for a classical music event. Intimacy against grandeur.",
    gallery_images: ["https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1400&q=85&auto=format&fit=crop&grayscale"]
  },
  {
    id: 13, slug: "1-1",
    title: "1:1",
    year: 2026, client: "NABA",
    role: "Graphic design, art direction, thesis",
    category: "Editorial", type: "Thesis project",
    description: "Thesis project on visual homogenization in social media. How algorithmic culture flattens aesthetic identity into a single smooth surface.",
    videos: ["/works/1-1/Flat_Libro_Teorico.mp4",
      "/works/1-1/Plexi.mp4"
    ],
  },
]
