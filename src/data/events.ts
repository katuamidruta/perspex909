export type ArchiveLink = {
  label: string;
  href: string;
};

export type ArchiveImage = {
  src?: string;
  alt: string;
  label: string;
};

export type ArchiveVideo = {
  youtubeId: string;
  label: string;
};

export type ArchiveSection = {
  title: string;
  items: string[];
};

export type ArchiveEntry = {
  id: string;
  slug: string;
  title: string;
  date: string;
  dateSort: string;
  location: string;
  summary: string;
  description: string[];
  flyerImage: ArchiveImage;
  galleryImages: ArchiveImage[];
  videos?: ArchiveVideo[];
  sections: ArchiveSection[];
  links: ArchiveLink[];
  tags: string[];
  soundcloudUrl?: string;
};

export const events: ArchiveEntry[] = [
  {
    id: "nightspacer-x-perspex",
    slug: "nightspacer-x-perspex",
    title: "Nightspacer x Perspex",
    date: "22-24 August 2025",
    dateSort: "2025-08-22",
    location: "Ciherang, Tanjungsari, West Java",
    summary: "Three days and two nights of sound without limits.",
    description: ["Join us for 3 days & 2 nights of sound without limits."],
    flyerImage: {
      src: "/archive/nightspacer-x-perspex.webp",
      alt: "Nightspacer x Perspex — event flyer, Ciherang, August 2025",
      label: "Event Flyer"
    },
    galleryImages: [],
    videos: [
      { youtubeId: "dWe98fos33A", label: "Reel 01 — Ciherang August 2025" },
      { youtubeId: "fs6pc7NOq8o", label: "Reel 02 — Ciherang August 2025" }
    ],
    sections: [
      { title: "Lighting & Multimedia", items: ["Convert"] },
      { title: "Live Visual Installation", items: ["Glasoon"] },
      {
        title: "Collectively Organized With",
        items: ["Black O Society", "Convert", "Obscura Signal", "Para Studio", "Ruang Bavr"]
      }
    ],
    links: [],
    soundcloudUrl: "https://soundcloud.com/prspx-909/sets/nightspacer-x-perspex-ciherang",
    tags: ["campout", "collaboration", "sound", "visual installation"]
  },
  {
    id: "campout-vol-ii",
    slug: "campout-vol-ii",
    title: "Campout Vol. II",
    date: "1 November 2025",
    dateSort: "2025-11-01",
    location: "Tibuan Waterfall Campground, Buleleng",
    summary: "The ritual returns to the forest, from sunset to sunrise.",
    description: ["The ritual returns to the forest.", "From sunset to sunrise."],
    flyerImage: {
      src: "/archive/campout2-2.webp",
      alt: "Campout Vol. II — event documentation, Tibuan Waterfall Campground, November 2025",
      label: "Event Photo"
    },
    galleryImages: [
      { src: "/archive/campout1-3.webp", alt: "Campout Vol. II — event documentation", label: "Campout Vol. II" },
      { src: "/archive/campout1-1.webp", alt: "Campout Vol. II — event documentation", label: "Campout Vol. II" },
      { src: "/archive/campout1-2.webp", alt: "Campout Vol. II — event documentation", label: "Campout Vol. II" },
      { src: "/archive/campout1-4.webp", alt: "Campout Vol. II — event documentation", label: "Campout Vol. II" }
    ],
    sections: [
      {
        title: "Featuring",
        items: [
          "AK-DUB",
          "DR. YEZ",
          "SAN GONDEZ",
          "GET THE GAT",
          "HATAGARAH",
          "NOOR",
          "MASAGI × MASAYU × DJ BASICCC",
          "SAM FUTURA",
          "SEABASS",
          "TODJON × KASEM",
          "SU66EN9"
        ]
      },
      { title: "Visual & Lighting Installation", items: ["Obscura Signal"] },
      {
        title: "Built By",
        items: ["Nightspacer Bali", "Pure! Records", "Perspex", "Obscura Signal"]
      }
    ],
    links: [],
    tags: ["campout", "forest", "buleleng", "collaboration"]
  },
  {
    id: "entering-2026-portal",
    slug: "entering-2026-portal",
    title: "Entering 2026 Portal",
    date: "31 December 2025",
    dateSort: "2025-12-31",
    location: "New Year's Eve collaboration",
    summary: "Two stages, different tempos, and Perspex sound inside a larger festival environment.",
    description: [
      "Two stages. Different tempos.",
      "This New Year's Eve collaboration brought Perspex sound into a larger festival environment while maintaining experimental roots, club culture and emotional intensity."
    ],
    flyerImage: {
      src: "/archive/PortalNYE-1.webp",
      alt: "Entering 2026 Portal — New Year's Eve event flyer, December 2025",
      label: "Event Flyer"
    },
    galleryImages: [],
    videos: [
      { youtubeId: "SHYedt95ZnU", label: "Portal Reel 01" },
      { youtubeId: "E5gSY3IxGwQ", label: "Portal Reel 02" },
      { youtubeId: "EtSjMNwOeTY", label: "Portal Reel 03" },
      { youtubeId: "Kr8HWULuBz4", label: "Portal Reel 04" },
      { youtubeId: "4lk_baLjrtw", label: "Portal Reel 05" }
    ],
    sections: [
      {
        title: "Sumbu Stage",
        items: ["Alkahfa (Hybrid Set)", "Paradata (A/V Set)", "Su66en9 (Hybrid Set)"]
      },
      {
        title: "Detak Stage",
        items: ["Ambrukt (DJ Set)"]
      }
    ],
    links: [],
    tags: ["festival", "new year", "collaboration", "live"]
  }
];

export const getArchiveEntryBySlug = (slug: string) =>
  events.find((entry) => entry.slug === slug);
